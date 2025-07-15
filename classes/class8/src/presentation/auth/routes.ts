import { Router } from 'express';
import { AuthController } from './controller';
import { AuthService } from '../../domain/services/auth.service';

export class AuthRoutes {

    static get routes(): Router {

        const controller = new AuthController(new AuthService());
        const router = Router();
        router.post('/login', controller.login);
        router.post('/register', controller.register);
        router.get('/validate-email/:token', controller.validateEmail);

        return router;
    }
}