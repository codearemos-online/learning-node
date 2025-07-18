import { Router } from "express";
import { TodoController } from "./todos/controller";
import { TodoRoutes } from "./todos/routes";

export class AppRouter {
    static routes(): Router {
        const router = Router();
        router.use('/api/todos', TodoRoutes.routes())
        return router;
    }
}