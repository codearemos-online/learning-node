import { Request, Response } from 'express';
import { RegisterUserDto } from '../../domain';

export class AuthController {

    constructor(){}

    login(req: Request, res: Response){
        res.json({
            message: 'Login'
        });
    }

    register(req: Request, res: Response){
        const {name,email,password} = req.body;
        const userDto = RegisterUserDto.create(req.body)
        res.json({
            data:userDto
        });
    }

    validateEmail(req: Request, res: Response){

    }
    
}