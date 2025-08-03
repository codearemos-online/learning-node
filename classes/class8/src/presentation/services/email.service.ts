import nodemailer, { Transporter } from 'nodemailer';
import { envs } from '../../config/envs';

export interface Attachment{
    filename:string,
    path:string
}

export interface EmailOptions{
    to:string|string[],
    subject:string,
    htmlBody:string,
    attachments?:Attachment[]
}

export class EmailService{

    private transporter:Transporter;

    constructor(
        private readonly postToProvider:boolean
    ){
        
        this.transporter = nodemailer.createTransport({
            service: envs.MAIL_SERVICE,
            auth: {
                user: envs.MAILER_EMAIL,
                pass: envs.MAILER_SECRET_KEY
            }
        })
    }
    
    async sendData(options:EmailOptions){
        try{
            if(!this.postToProvider) return true;
            
            const {to,subject,htmlBody,attachments} = options;
            const sendInfo = await this.transporter.sendMail({
                to,
                subject,
                html:htmlBody,
                attachments
            })

            return true;
        }catch(error){
            return false;
        }
    }



}