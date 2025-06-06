import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';

export interface EmailOptions {
    to: string | string[],
    subject: string,
    htmlBody: string,
    attachments?: Attachment[]
}

export interface Attachment {
    filename: string,
    path: string
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAIL_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    async sendEmail(options: EmailOptions): Promise<boolean> {
        try {
            const { to, subject, htmlBody, attachments = [] } = options;
            const sendInfo = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments
            })
            console.log('Prueba Diego')
            console.log(sendInfo)
            return true;
        } catch (error) {
            return false;
        }
    }

    async sendEmailBySystemLogs(to: string | string[]) {
        const subject = 'prueba de logs';
        const htmlBody = `<h3>Prueba de email</h3>`;

        const attachments: Attachment[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
        ]

        return this.sendEmail({to,subject,htmlBody,attachments})
    }
}

