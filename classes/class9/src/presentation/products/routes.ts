import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "../services";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class ProductRoutes {
    static get routes():Router{
        const router = Router();
        const controller = new ProductController(new ProductService());

        router.get('/',controller.getAll);
        router.post('/',[AuthMiddleware.jwt],controller.create);
        return router;
    }
}