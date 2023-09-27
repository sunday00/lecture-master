import mailer from 'nodemailer'
import {welcomeTemplate} from "./welcome.template.js";
import {configDotenv} from "dotenv";

configDotenv({ path: './.env' })

class MailManager {
    send(to) {
        const transporter = mailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.MAIL_USR,
                pass: process.env.MAIL_SEC
            }
        })

        transporter.sendMail({
            from: `sunday00 <${process.env.MAIL_USR}>`,
            to,
            subject: 'Welcome',
            html: welcomeTemplate()
        }, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log('email sent successfully');
            }

            transporter.close();
        })
    }
}

export const mailManager = new MailManager()