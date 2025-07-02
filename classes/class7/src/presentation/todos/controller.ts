import { Request, Response } from "express";

const todos = [
    {
        'id': 1,
        'task': 'buy milk'
    },
    {
        'id': 2,
        'task': 'buy bread'
    },
    {
        'id': 3,
        'task': 'read book'
    }
];
export class TodoController {
    getTodos = (req: Request, res: Response) => {
        res.json(todos)
    }

    getTodoById = (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const numberId = parseInt(id)
            if(isNaN(numberId)){
                res.status(400).json({
                    message:'param is not valid'
                })
            }
            const todo = todos.find((todo) => todo.id == numberId)
            todo ? res.json(todo) : res.status(404).json({
                message: `todo not found`
            })
        } catch (error){
            res.json({
                message:error
            })
        }
    }

    createTodo = (req: Request, res: Response) => {
        const { task } = req.body;

        if(!task){
            res.status(400).json({
                message: 'task is required'
            })
        }

        const newTodo = {
            id: todos.length + 1,
            task
        }
        todos.push(newTodo)
        res.status(201).json(newTodo)
    }

    updateTodo = (req:Request,res:Response) => {
        const { id } = req.params;
        const { task } = req.body;

        if(!task){
            res.status(400).json({
                message: 'task is required'
            })
        }

        const todo = todos.find((todo) => todo.id == parseInt(id))
        if(!todo){
            res.status(404).json({
                message: 'todo not found'
            })
        }

        todo!.task = task
        res.json(todo)
    }


}