'use client'

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useUserAttributes } from '@/hooks/useUserAttributes';

export default function UserGreeting() {
  const { user } = useAuthenticator((context) => [context.user]);
  const { givenName, isLoading, error } = useUserAttributes();

  if (!user) {
    return <p>You are not signed in.</p>;
  }

  if (isLoading) {
    return <p>Loading user information...</p>;
  }

  if (error) {
    return <p>Error loading user information. Please try again.</p>;
  }

  return <p className="text-lg">Welcome, {givenName || user.username || 'User'}!</p>;
}

