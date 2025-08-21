import { ProductModel } from "../../data";
import { CreateProductDto, CustomError } from "../../domain";
import { PaginationDto } from "../../domain/dtos/shared/pagination-dto";

export class ProductService {

    async getProducts(paginationDto:PaginationDto){
        const {page,limit} = paginationDto;

        try {
            const [total,products] = await Promise.all([
                await ProductModel.countDocuments(),
                await ProductModel.find({}, { name: 1, available: 1 })
                .skip((page - 1) * limit)
                .limit(limit)
            ])

            return {
                products,
                page,
                limit,
                total,
                next: (page+1 <= Math.ceil(total / limit)) ?  `api/products?page=${page + 1}&limit=${limit}` : null,
                prev: (page - 1 > 0) ? `api/products?page=${page - 1}&limit=${limit}` : null,
            }
        } catch (error) {
            throw CustomError.internalServerError(`something is wrong with products`)
        }
    }

    async createProduct(createProductDto:CreateProductDto){
        const productExists = await ProductModel.findOne({name:createProductDto.name});
        if(productExists) throw CustomError.badRequest('Product already exists');

        try {
            const product = new ProductModel({
                ...createProductDto
            })

            await product.save();

            return product;
        } catch (error) {
            throw CustomError.internalServerError(`${error}`);
        }
    
    }
    

}