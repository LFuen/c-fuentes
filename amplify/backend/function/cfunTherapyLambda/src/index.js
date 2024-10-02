/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const nodemailer = require('nodemailer');
const { getSecrets } = require('./utils/aws_secrets.js');

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "https://cfuentherapy.com",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "CORS preflight" }),
    };
  }


  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405, // Method Not Allowed
      headers,
      body: JSON.stringify({ error: 'This is not a POST method; not allowed.' }),
    };
  }

  try {
    // Get secrets
    const secrets = await getSecrets();

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.us-east-1.awsapps.com',
      port: 465,
      secure: true,
      auth: {
        user: secrets.WORKMAIL_EMAIL,
        pass: secrets.WORKMAIL_PASS,
      },
    });

    // Parse request body to extract formData
    const { formData } = JSON.parse(event.body);
    const serviceType = formData.therapyChecked ? 'Client' : 'Supervisee';

    // Set up email parameters
    const mailOptions = {
      from: '"CFuen Therapy" <contact@cfuentherapy.com>',
      to: secrets.WORKMAIL_EMAIL,
      subject: `New ${serviceType} Inquiry`,
      text: `
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error submitting form', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error submitting form' }),
    };
  }
};
