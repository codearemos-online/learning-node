import { UserModel } from "../../data";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";
import { CustomError } from "../errors/custom.error";

export class AuthService{
    constructor(){}
    
    async registerUser(userDto:RegisterUserDto){
        
        const user = await UserModel.findOne({email:userDto.email}) 

        if(user) throw CustomError.badRequest("email already exists")

        try{
            const user = new UserModel(userDto)
            await user.save();
            const userEntity = UserEntity.fromObject(user);
            const {password, ...userWithoutPassword} = userEntity;
            return userWithoutPassword;
        }catch(error){
            throw CustomError.internalServerError("error creating user")
        }
        
    }
}