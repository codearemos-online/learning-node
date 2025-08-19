const jwt = require("jsonwebtoken");
import { envs } from "./envs";

const JWT_SECRET = envs.JWT_SECRET;

export class JwtAdapter{    
    static async generateToken(payload: any, duration: string="2h"){
        try {
            return jwt.sign(payload, JWT_SECRET, {expiresIn: duration});
        } catch (error) {
            throw error;
        }
    }

    static async verifyToken<T>(token: string):Promise<T|null>{
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            throw error;
        }
    }
}   