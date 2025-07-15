import { Request, Response } from 'express';
import { CustomError, RegisterUserDto } from '../../domain';
import { AuthService } from '../../domain/services/auth.service';


export class AuthController {

    constructor(
        public readonly authService:AuthService
    ){}

    login = (req: Request, res: Response) =>{
        res.json({
            message: 'Login'
        });
    }

    register = (req: Request, res: Response) => {
        const userRegisterDto = RegisterUserDto.create(req.body)
        const [error,userDto] = userRegisterDto; 

        if(error) res.status(400).json({error})
    
        this.authService.registerUser(userDto!)
        .then((user) => res.json(user))
        
     
    }

    validateEmail(req: Request, res: Response){

    }
    
}