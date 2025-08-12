import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { CategoryService } from "../services/category.service";

export class CategoryRoutes{
    static get routes():Router{
        const router = Router();
        const controller = new CategoryController(new CategoryService());

        router.get('/',controller.getAll);
        router.post('/',[AuthMiddleware.jwt],controller.create)

        return router;
    }
}