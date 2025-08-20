import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "../services";

export class ProductRoutes {
    static get routes():Router{
        const router = Router();
        const controller = new ProductController(new ProductService());

        router.get('/',controller.getAll);

        return router;
    }
}