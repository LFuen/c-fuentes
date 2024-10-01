import nodemailer from 'nodemailer';
import { getSecrets } from '../../utils/aws_secrets';


export default async function handler(req, res) {
  
  res.setHeader('Access-Control-Allow-Origin', 'https://cfuentherapy.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  
  if (req.method !== 'POST') {
    // Respond with 405 Method Not Allowed for any non-POST requests
    return res.status(405).json({ error: 'POST method not allowed.' });
  }

  try {
    const secrets = await getSecrets();


    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.us-east-1.awsapps.com',
      port: 465,
      secure: true,
      auth: {
        user: secrets.WORKMAIL_EMAIL,
        pass: secrets.WORKMAIL_PASS,
      },
    });

    const { formData } = req.body;
    const serviceType = formData.therapyChecked ? 'Client' : 'Supervisee';

    // Set up email parameters
    const mailOptions = {
      from: '"CFuen Therapy" <contact@cfuentherapy.com>',
      to: secrets.WORKMAIL_EMAIL,
      subject: `New ${serviceType} Inquiry`,
      text:  `
              Name: ${formData.name}
              Email: ${formData.email}
              Phone: ${formData.phone}
              City: ${formData.city}
              State: ${formData.state}
              Zip: ${formData.zip}              
              Service Requested: ${formData.therapyChecked ? 'Therapy' : 'Supervision'}
              Message: ${formData.message}
            `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({success: true});
  } catch (error) {
    console.error('Error submitting form', error);
    res.status(500).json({ error: 'Error submitting form' });
  }
}



