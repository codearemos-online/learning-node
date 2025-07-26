import { UserModel } from "../../data";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";
import { CustomError } from "../errors/custom.error";
import { bcryptAdapter, JwtAdapter } from "../../config";
import { LoginUserDto } from "../dtos/auth/login-user.dto";

export class AuthService{
    constructor(){}
    
    async registerUser(userDto:RegisterUserDto){
        
        const user = await UserModel.findOne({email:userDto.email}) 

        if(user) throw CustomError.badRequest("email already exists")

        try{
            const user = new UserModel(userDto)
            user.password = await bcryptAdapter.hash(user.password)
            await user.save();
            const userEntity = UserEntity.fromObject(user);
            const {password, ...userWithoutPassword} = userEntity;
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
}