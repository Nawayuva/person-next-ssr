import { cookies } from 'next/headers';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/lib/amplifyServerUtils';
import { AuthFetchResult } from './AuthFetchResults';

// This page always dynamically renders per request
export const dynamic = 'force-dynamic';

export default async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec)
    });

    return (
      <AuthFetchResult
        description="The API is called on the server side."
        data={currentUser}
      />
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}