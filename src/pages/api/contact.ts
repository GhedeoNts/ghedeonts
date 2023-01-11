import { NextApiResponse, NextApiRequest } from 'next';
import { mailOptions, transporter } from '../../config/nodemailer';

type Fields = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

type Response = {
    error?: string;
    status?: string;
    message?: string;
};

// Implémentation des data à envoyer au template html du mail
const MAIL_FORM: any = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const generateContentEmail = (data: any) => {
    // eslint-disable-next-line arrow-body-style, no-return-assign,no-param-reassign
    const stringData = Object.entries(data).reduce((str: string, [key, value]) =>
        // eslint-disable-next-line no-return-assign, no-param-reassign
        (str += `${MAIL_FORM[key]}: \n${value} \n \n`),
        ''
    );

    // eslint-disable-next-line no-return-assign
    const htmlData = Object.entries(data).reduce((str: string, [key, value]) =>
    // eslint-disable-next-line no-return-assign, no-param-reassign
    (str += `
            <h1 class="form-heading" align="left">
            ${MAIL_FORM[key]}
            </h1>
            <p class="form-answer" align="left">
            ${value}
            </p>
            `),
        '');

    return {
        text: stringData,
        html: `<!DOCTYPE html><html><head><title></title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><style type="text/css">a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style></head><body style="margin:0!important;padding:0!important;background:#fff"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#ffffff" align="center" style="padding:10px 15px 30px 15px" class="section-padding"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px" class="responsive-table"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td style="padding:0;font-size:16px;line-height:25px;color:#232323" class="padding message-content"><h2>New Contact Message</h2><div class="form-container">${htmlData}</div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>`,
    };
};

// eslint-disable-next-line consistent-return
const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
    const { name, email, subject, message }:any = req.body as Fields;

    if (req.method !== 'POST') {
        return res.status(404).send({ status: 'Echec', error: 'La soumission du formulaire à échouer' });
    }

    try {
        if (!name || !name.trim()) {
            throw new Error('Veuillez indiquer un nom valide ou une au moins 2 caractères dans le champs nom');
        }
        if (!email || !email.trim()) {
            throw new Error('Veuillez indiquer un mail valide ou une valeur dans le champs mail');
        }

        if (!subject || !subject.trim()) {
            throw new Error('Veuillez indiquer un objet de mail valide ou une valeur le champ objet du mail');
        }

        if (!message || !message.trim()) {
            throw new Error('Veuillez indiquer un message dans votre mail ou une valeur le champ message');
        }

        await transporter.sendMail({
            ...mailOptions,
            ...generateContentEmail({ name, email, subject, message }),
            replyTo: email,
            subject: `${subject}`,
            text: message,
            // html: `<p>${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`,
        });
        res.status(200).send({ status: 'OK ', message: 'le message a été envoyé 👍🙂' });
    } catch (error: any) {
        return res.status(500).send({ status: 'Echec 🫢', error: `${error} 🫢` });
    }
};

export default handler;
