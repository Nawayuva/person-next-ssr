'use client'

import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { usePeople } from '../../hooks/usePeople';
import { PeopleTable } from '@/app/components/PeopleTable';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { signOut } from 'aws-amplify/auth';
import UserCard from '../components/UserCard';

export default function PersonClientPage() {
  const router = useRouter();
  const { user, isLoading: isAuthLoading, error: authError } = useAuth();
  const { people, isLoading: isPeopleLoading, error: peopleError } = usePeople();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/'); // Redirect to home page after sign out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isAuthLoading) return <div>Loading authentication...</div>;
  if (authError) return <div>Authentication error: {authError.message}</div>;

  if (!user) {
    return (
      <Card className="w-[350px] mx-auto mt-10">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Authenticator>
            {({ user }) => (
              <div>
                <h1 className="text-xl mb-4">Welcome, {user?.username}!</h1>
                <Button onClick={handleSignOut}>Sign out</Button>
              </div>
            )}
          </Authenticator>
        </CardContent>
      </Card>
    );
  }

  if (isPeopleLoading) return <div>Loading people data...</div>;
  if (peopleError) return <div>Error loading people data: {peopleError.message}</div>;
  if (!people) return <div>No people found</div>;

  return (
    <div className="container mx-auto px-4">          
    <h1>People (Client-side Rendered)</h1>

      <UserCard />

      <PeopleTable people={people} />
    </div>
  );
}

