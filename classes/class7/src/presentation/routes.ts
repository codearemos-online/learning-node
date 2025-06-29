import { Router } from "express";

export class AppRouter{
    static routes():Router{
        const router = Router();

        router.get('/api/todos', (req, res) => {
            res.json([
                {
                    'id': 1,
                    'task': 'buy milk'
                },
                {
                    'id': 2,
                    'task': 'buy bread'
                },
            ])
        })


        return router;
    }
}