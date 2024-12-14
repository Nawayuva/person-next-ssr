'use client'

import { useAuthenticator } from '@aws-amplify/ui-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserGreeting from './UserGreeting';
import SignOutButton from './SignOutButton';

export default function UserCard() {
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>User Status</CardTitle>
      </CardHeader>
      <CardContent>
        <UserGreeting />
        {user && (
          <div className="mt-4">
            <SignOutButton />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

