import { Request, Response } from "express";
import { ProductService } from "../services";


export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) {

    }

    getAll = (req:Request,res:Response) => {
        res.json({
            message: 'Hello World'
        })
    }
    
    save = (req:Request,res:Response) => {
        res.json({
            message: 'Hello World Save'
        })
    }

}