import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class CategoryRoutes{
    static get routes():Router{
        const router = Router();
        const controller = new CategoryController();

        router.get('/',controller.getAll);
        router.post('/',[AuthMiddleware.jwt],controller.create)

        return router;
    }
}