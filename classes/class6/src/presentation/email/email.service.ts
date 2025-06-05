import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';

export interface EmailOptions {
    to:string,
    subject:string,
    htmlBody:string
}

export class EmailService{
    private transporter = nodemailer.createTransport({
        service:envs.MAIL_SERVICE,
        auth:{
            user:envs.MAILER_EMAIL,
            pass:envs.MAILER_SECRET_KEY
        }
    })

    async sendEmail(options:EmailOptions):Promise<boolean>{
        try{
            const { to,subject,htmlBody } = options;
            const sendInfo = await this.transporter.sendMail({
                to:to,
                subject:subject,
                html:htmlBody
            })
            console.log('Prueba Diego')
            console.log(sendInfo)
            return true;
        }catch(error){
            return false;
        }
    }
}

