'use client'

import { useAuthenticator } from '@aws-amplify/ui-react';
import SignOutButton from './SignOutButton';

export default function AuthStatus() {
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username || 'User'}!</p>
          <SignOutButton />
        </div>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
  );
}

