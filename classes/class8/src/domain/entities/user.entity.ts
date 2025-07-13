import { CustomError } from "..";

export class UserEntity {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly emailVerified: boolean,
        public readonly password: string,
        public readonly role: string[],   
        public readonly img?: string,
    ) {}

    fromObject(object:{[key:string]:any}){
        const {id,_id,name, email,emailVerified, password, role, img} = object;

        if(!id && !_id){
            throw CustomError.badRequest('id is required');
        }

        if(!name){
            throw CustomError.badRequest('name is required');
        }
        
        if(!email){
            throw CustomError.badRequest('email is required');
        }

        if(emailVerified === undefined){
            throw CustomError.badRequest('emailVerified is required');
        }

        if(!password){
            throw CustomError.badRequest('password is required');
        }

        if(!role){
            throw CustomError.badRequest('role is required');
        }

        return new UserEntity(id || _id,name, email,emailVerified, password, role, img);
    }
}