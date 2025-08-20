import { Request, Response } from "express"
import { CreateCategoryDto } from "../../domain"
import { CategoryService } from "../services/category.service"
import { PaginationDto } from "../../domain/dtos/shared/pagination-dto"

export class CategoryController {

    constructor(
        private readonly categoryService: CategoryService
    ) {

    }

    getAll = (req: Request, res: Response) => {
        const { page = 1, limit = 10 } = req.query
        const [error, paginationDto] = PaginationDto.create(+page, +limit)

        if(error) return res.status(400).json({error})
            
        this.categoryService.getAll(paginationDto!).then(categories => {
            res.json(categories)
        })
    }

    create = (req: Request, res: Response) => {

        const [error, createCategoryDto] = CreateCategoryDto.create(req.body)
        if (error) res.status(400).json(error)
        this.categoryService.createCategory(createCategoryDto!, req.body.user)
            .then(category => {
                res.status(201).json(category)
            })
    }
}