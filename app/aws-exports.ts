import { Amplify } from "aws-amplify";

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_0IZsUv8HN", 
      userPoolClientId: "358bfgi6ffmblbitgs6a0ooi1m", // Replace with your Cognito App Client ID
      userPoolEndpoint: "https://cognito-idp.us-east-1.amazonaws.com/", // Replace with your region endpoint
    },
  },
};

console.log("amplifyConfig", amplifyConfig);

Amplify.configure(amplifyConfig);

export default amplifyConfig;


/* userPoolId: process.env.USER_POOL_ID!, // Replace with your Cognito User Pool ID
userPoolClientId: process.env.USER_POOL_CLIENT_ID!, // Replace with your Cognito App Client ID
userPoolEndpoint: process.env.USER_POOL_ENDPOINT, // Replace with your region endpoint

 */