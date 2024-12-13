'use client'

import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserCard() {
  const { user, signOut } = useAuthenticator((context) => [context.user, context.signOut]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>User Status</CardTitle>
      </CardHeader>
      <CardContent>
        {user ? (
          <>
            <div className="mb-4">
              <p className="text-lg">Welcome, {user.username || 'User'}!</p>
              <p className="text-sm text-muted-foreground">Email: {user.signInDetails?.loginId}</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">Sign out</Button>
          </>
        ) : (
          <p>You are not signed in.</p>
        )}
      </CardContent>
    </Card>
  );
}

