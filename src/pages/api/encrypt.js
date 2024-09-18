import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed.' });
    }

    const {token} = req.body;
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

    try {
        const decodedData = jwt.verify(token, secretKey);

        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.us-east-1.awsapps.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.THERAPY_EMAIL,
            subject: 'New Contact Form Submission',
            text: `From: ${decodedData.data.email}\n\n${JSON.stringify(decodedData.data, null, 2)}`,
        };


        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent.' });
    } catch (err) {
        console.error("Error in sending email:", err);
        res.status(500).json({ message: 'Failed to send email.' });
    }
}
