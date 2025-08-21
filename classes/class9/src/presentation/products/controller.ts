import { Request, Response } from "express";
import { ProductService } from "../services";
import { CreateProductDto } from "../../domain";
import { PaginationDto } from "../../domain/dtos/shared/pagination-dto";


export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) {

    }

    getAll = (req:Request,res:Response) => {
        const {page = 1,limit = 10} = req.query;
        const [error,paginationDto] = PaginationDto.create(+page,+limit);
        if(error) return res.status(400).json({error});

        this.productService.getProducts(paginationDto!)
        .then(products => {
            res.json({products});
        })
    }
    
    create = (req:Request,res:Response) => {
        const [errorMessage,createProductDto] = CreateProductDto.create(req.body);
        if(errorMessage) return res.status(400).json({error:errorMessage});

        this.productService.createProduct(createProductDto!)
        .then(product => {
            res.status(201).json(product);
        })
    }

}