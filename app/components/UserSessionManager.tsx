'use client'

import { useState, useEffect } from 'react';
import { AuthUser, getCurrentUser, signOut } from 'aws-amplify/auth';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface UserAttributes {
  email?: string;
  email_verified?: boolean;
  sub?: string;
}

export default function UserSessionManager() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
    } catch (error) {
      setUser(null);
      console.log('No user signed in');
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.log('Error signing out:', error);
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div>Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>User Session</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {user ? (
          <div className="space-y-4">
            <div className="grid gap-2">
              <div className="font-medium">Username</div>
              <div className="text-sm text-muted-foreground">{user.username}</div>
            </div>
            {user.signInDetails?.loginId && (
              <div className="grid gap-2">
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">{user.signInDetails.loginId}</div>
              </div>
            )}
            <Button 
              onClick={handleSignOut}
              variant="destructive"
              className="w-full"
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-muted-foreground">No user currently signed in</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

