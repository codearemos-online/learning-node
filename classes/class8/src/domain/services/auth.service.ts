import { UserModel } from "../../data";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { CustomError } from "../errors/custom.error";

export class AuthService{
    constructor(){}
    
    async registerUser(userDto:RegisterUserDto){
        
        const user = await UserModel.findOne({email:userDto.email}) 

        if(user) throw CustomError.badRequest("email already exists")

        try{
            const user = new UserModel(userDto)
            await user.save();
            return user
        }catch(error){
            throw CustomError.internalServerError("error creating user")
        }
        
    }
}