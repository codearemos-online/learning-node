import { Request, Response } from 'express';

export class AuthController {

    constructor(){}

    login(req: Request, res: Response){
        res.json({
            message: 'Login'
        });
    }

    register(req: Request, res: Response){

    }

    validateEmail(req: Request, res: Response){

    }
    
}