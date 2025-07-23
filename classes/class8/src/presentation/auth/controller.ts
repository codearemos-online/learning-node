import { Request, Response } from 'express';
import { CustomError, LoginUserDto, RegisterUserDto } from '../../domain';
import { AuthService } from '../../domain/services/auth.service';


export class AuthController {

    private handleError(error:unknown,res:Response){
        if(error instanceof CustomError){
            res.status(error.statusCode).json({message:error.message})
        }else{
            res.status(500).json({message:"internal server error"})
        }
    }

    constructor(
        public readonly authService:AuthService
    ){}

    login = (req: Request, res: Response) =>{
        const userLoginDto = LoginUserDto.create(req.body)
        const [error,userDto] = userLoginDto;

        if(error) res.status(400).json({error})

        this.authService.loginUser(userDto!)
        .then((user) => res.json(user))
        .catch((error) => this.handleError(error,res))
    }

    register = (req: Request, res: Response) => {
        const userRegisterDto = RegisterUserDto.create(req.body)
        const [error,userDto] = userRegisterDto; 

        if(error) res.status(400).json({error})
    
        this.authService.registerUser(userDto!)
        .then((user) => res.json(user))
        .catch((error) => this.handleError(error,res))
     
    }

    validateEmail(req: Request, res: Response){

    }
    
}