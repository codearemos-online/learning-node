import { Request, Response } from "express";

export class TodoController {
    getTodos = (req:Request,res:Response) => {
        res.json([
            {
                'id': 1,
                'task': 'buy milk'
            },
            {
                'id': 2,
                'task': 'buy breads'
            },
        ])
    }
}