import { regularExps } from "../../../config";

export class RegisterUserDto{
    private constructor(
        public readonly name:string,
        public readonly email:string,
        public readonly password:string,
    ){}

    static create(object:{[key:string]:any}):[string?,RegisterUserDto?]{
        const { name,email,password} = object;

        if(!name) return ['Name is required'];
        if(!email) return ['Email is required'];
        if(!password) return ['Password is required'];
        if(!regularExps.email.test(email)) return ['Email is not valid'];
        if(password.length < 8) return ['Password must be at least 8 characters long'];

        return [undefined,new RegisterUserDto(name,email,password)];
    }
}