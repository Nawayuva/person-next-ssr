'use client'

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

function AuthProviderComponent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const AuthProvider = withAuthenticator(AuthProviderComponent, {
  signUpAttributes: ['given_name', 'family_name', 'email'],
  formFields: {
    signUp: {
      given_name: { label: 'First Name', placeholder: 'Enter your first name', isRequired: true },
      family_name: { label: 'Last Name', placeholder: 'Enter your last name', isRequired: true },
      //email: { label: 'Email', type: 'email', isRequired: true },
      password: { label: 'Password', type: 'password', isRequired: true },
      confirm_password: { label: 'Confirm Password', type: 'password', isRequired: true },
    },
  },
});

