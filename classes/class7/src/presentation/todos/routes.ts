import { Router } from "express";
import { TodoController } from "./controller";

export class TodoRoutes{
    static routes():Router{
        const router = Router();
        const todoController = new TodoController();

        router.get('/', todoController.getTodos);
        router.get('/:id',todoController.getTodoById);
        router.post('/',todoController.createTodo);
        router.put('/:id',todoController.updateTodo);
        router.delete('/:id',todoController.deleteTodo);
        return router;
    }
}