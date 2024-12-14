import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    // You can also enable phone & social providers:
    // phone: true,
    // socialProviders: ['amazon', 'apple', 'facebook', 'google']
  },
});

