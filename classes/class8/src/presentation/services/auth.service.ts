import { UserModel } from "../../data";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { bcryptAdapter, envs, JwtAdapter } from "../../config";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { EmailService } from "./email.service";

export class AuthService{
    constructor(
        private readonly emailService:EmailService
    ){}
    
    async registerUser(userDto:RegisterUserDto){
        
        const user = await UserModel.findOne({email:userDto.email}) 

        if(user) throw CustomError.badRequest("email already exists")

        try{
            const user = new UserModel(userDto)
            user.password = await bcryptAdapter.hash(user.password)
            await user.save();
            const userEntity = UserEntity.fromObject(user);
            const {password, ...userWithoutPassword} = userEntity;
            await this.sendValidationEmail(userWithoutPassword.email)
            const token = await JwtAdapter.generateToken(userWithoutPassword)
            return {
                user: userWithoutPassword,
                token
            };
        }catch(error){
            throw CustomError.internalServerError("error creating user")
        }
        
    }

    async loginUser(userDto:LoginUserDto){
     try{
        const user = await UserModel.findOne({email:userDto.email})

        if(!user) throw CustomError.badRequest("email or password is incorrect")

        const isPasswordValid = await bcryptAdapter.compare(userDto.password,user.password)

        if(!isPasswordValid) throw CustomError.badRequest("email or password is incorrect")
        
        const userEntity = UserEntity.fromObject(user);
        const {password, ...userWithoutPassword} = userEntity;
        const token = await JwtAdapter.generateToken(userWithoutPassword)
        return {
            user: userWithoutPassword,
            token
        };
     }catch(error){
        console.log(error)
        throw CustomError.internalServerError("error logging in user")
     }
    }

    private async sendValidationEmail(email:string){
        const token = await JwtAdapter.generateToken({email})
        if(!token) throw CustomError.internalServerError("error generating token")

        const url = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`
        const html = `
        <h1>Validate your email</h1>
        <p>Click <a href="${url}">here</a> to validate your email</p>
        `
        const isSent = await this.emailService.sendData({to:email,subject:"Validate your email",htmlBody:html})
        if(!isSent) throw CustomError.internalServerError("error sending email")
        return true;
    }

    public async validateToken(token:string){
        try{
            const payload = await JwtAdapter.verifyToken(token)
            const {email} = payload;
            if(!email) throw CustomError.badRequest("Email not found")
            const user = await UserModel.findOne({email})
            if(!user) throw CustomError.badRequest("User not found")
            user.emailVerified = true;
            await user.save();
            return true;
        }catch(error){
            throw CustomError.badRequest("invalid token")
        }
    }
}