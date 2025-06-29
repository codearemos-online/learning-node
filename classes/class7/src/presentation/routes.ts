import { Router } from "express";
import { TodoController } from "./todos/controller";

export class AppRouter{
    static routes():Router{
        const router = Router();
        const todoController = new TodoController();

        router.get('/api/todos', todoController.getTodos)


        return router;
    }
}