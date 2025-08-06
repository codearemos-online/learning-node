import { Request, Response } from "express"
import { CreateCategoryDto } from "../../domain"

export class CategoryController{
    getAll = (req:Request,res:Response) =>{
        res.json({
            message: 'Hello World'
        })
    }

    create = (req:Request,res:Response) => {
        const [error,createCategoryDto] = CreateCategoryDto.create(req.body)
        if(error) res.status(400).json(error)
        res.json({
            createCategoryDto
        })
    }
}