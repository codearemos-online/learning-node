import { Request, Response } from "express"
import { CreateCategoryDto } from "../../domain"
import { CategoryService } from "../services/category.service"

export class CategoryController{

    constructor(
        private readonly categoryService:CategoryService
    ){

    }

    getAll = (req:Request,res:Response) =>{
        res.json({
            message: 'Hello World'
        })
    }

    create = (req:Request,res:Response) => {

        const [error,createCategoryDto] = CreateCategoryDto.create(req.body)
        if(error) res.status(400).json(error)
        this.categoryService.createCategory(createCategoryDto!,req.body.user)
        .then(category => {
            res.status(201).json(category)
        })
    }
}