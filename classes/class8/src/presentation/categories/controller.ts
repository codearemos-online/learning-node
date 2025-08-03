import { Request, Response } from "express"

export class CategoryController{
    getAll = (req:Request,res:Response) =>{
        res.json({
            message: 'Hello World'
        })
    }
}