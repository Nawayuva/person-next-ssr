import { Amplify } from "aws-amplify";

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.USER_POOL_ID!, // Replace with your Cognito User Pool ID
      userPoolClientId: process.env.USER_POOL_CLIENT_ID!, // Replace with your Cognito App Client ID
      userPoolEndpoint: process.env.USER_POOL_ENDPOINT, // Replace with your region endpoint
    },
  },
};

Amplify.configure(amplifyConfig);

export default amplifyConfig;
