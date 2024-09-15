import nodemailer from 'nodemailer';
import CryptoJS from 'crypto-js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed.' });
    }

    const { formData } = req.body;

    const secretKey = process.env.SECRET_KEY;
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(formData), secretKey).toString();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.THERAPY_EMAIL,
        subject: 'New Contact Form Submission',
        text: `From: ${formData.email}\n\n${encryptedData}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent' });
    } catch (err) {
        res.status(500).json({ message: 'Email not sent' });
    }
}