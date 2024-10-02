const {
    SecretsManagerClient,
    GetSecretValueCommand,
  } = require("@aws-sdk/client-secrets-manager");
  
  const secret_name = "cfuen-email";
  
 const getSecrets = async () => {
    const client = new SecretsManagerClient({
      region: "us-east-1",
    });
  
    try {
      const response = await client.send(
        new GetSecretValueCommand({
          SecretId: secret_name,
          VersionStage: "AWSCURRENT", 
        })
      );
  
      const secrets = JSON.parse(response.SecretString);
      return secrets;
    } catch (error) {
      console.log('Error retrieving secret:', error);
      console.error('Error retrieving secret:', error);
      throw error;
    }
  };

module.exports = { getSecrets };
  