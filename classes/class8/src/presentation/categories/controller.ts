import { Request, Response } from "express"
import { CreateCategoryDto } from "../../domain"

export class CategoryController{
    getAll = (req:Request,res:Response) =>{
        res.json({
            message: 'Hello World'
        })
    }

    create = (req:Request,res:Response) => {
        const createCategoryDto = CreateCategoryDto.create(req.body)
        res.json({
            createCategoryDto
        })
    }
}