import { getSecrets } from '../../utils/aws_secrets';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";


export default async function handler(req, res) {
  
  res.setHeader('Access-Control-Allow-Origin', 'https://www.cfuentherapy.com');
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
    console.log('SECRETS:', secrets);


    const sesClient = new SESClient({ 
      region: 'us-east-1',
      credentials: {
        accessKeyId: secrets.AWS_ACCESS_KEY_ID,
        secretAccessKey:  secrets.AWS_SECRET_ACCESS_KEY
      }
    });

    console.log('SES Client initialized:', sesClient);

    const { formData } = req.body;
    const serviceType = formData.therapyChecked ? 'Client' : 'Supervisee';

    // Set up email parameters
    const params = {
      Destination: {
        ToAddresses: ['contact@cfuentherapy.com'],
      },
      Message: {
        Body: {
          Text: {
            Data: `
              Name: ${formData.name}
              Email: ${formData.email}
              Phone: ${formData.phone}
              City: ${formData.city}
              State: ${formData.state}
              Zip: ${formData.zip}              
              Service Requested: ${formData.therapyChecked ? 'Therapy' : 'Supervision'}
              Message: ${formData.message}
            `,
          },
        },
        Subject: { Data: `New ${serviceType} Submission` },
      },
      Source: 'contact@cfuentherapy.com',
    };

    // Send the email
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    res.status(200).json({ success: true });

  } catch (error) {
    console.log('Error sending email:', error);
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email (on the backend)' });
  }
}



