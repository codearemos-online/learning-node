import { CategoryModel } from "../../data";
import { CreateCategoryDto, CustomError, UserEntity } from "../../domain";
import { PaginationDto } from "../../domain/dtos/shared/pagination-dto";

export class CategoryService {

    async getAll(paginationDto:PaginationDto) {
        
        const {page,limit} = paginationDto;

        try {
            const [total, categories] = await Promise.all([
                await CategoryModel.countDocuments(),
                await CategoryModel.find({}, { name: 1, available: 1 })
                .skip((page - 1) * limit)
                .limit(limit)
            ])
            
            return {
                categories,
                page,
                limit,
                total,
                next: (page+1 <= Math.ceil(total / limit)) ?  `api/categories?page=${page + 1}&limit=${limit}` : null,
                prev: (page - 1 > 0) ? `api/categories?page=${page - 1}&limit=${limit}` : null,
            };
        }
        catch (error) {
            throw CustomError.internalServerError(`something is wrong with categories`)
        }
    }

    async createCategory(createCategoryDto: CreateCategoryDto, user: UserEntity) {
        const categoryExists = await CategoryModel.findOne({ name: createCategoryDto.name });
        if (categoryExists) throw CustomError.badRequest('Category already exists')

        try {
            const category = new CategoryModel({
                ...createCategoryDto,
                user: user.id
            })

            await category.save();

            return {
                id: category.id,
                name: category.name
            }

        } catch (error) {
            throw CustomError.internalServerError(`${error}`)
        }

    }

}