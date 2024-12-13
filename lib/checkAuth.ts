import { fetchAuthSession } from '@aws-amplify/auth/server';
import { AuthSession } from '@aws-amplify/auth';
import { runWithAmplifyServerContext } from './amplifyServerUtils'; 
// This is the runWithAmplifyServerContext from createServerRunner output

export async function checkAuth(): Promise<boolean> {
  try {
    const session = await runWithAmplifyServerContext<AuthSession>({
      nextServerContext: null, // or pass a context if you have one
      async operation(contextSpec) {
        // Call fetchAuthSession with the provided contextSpec
        return fetchAuthSession(contextSpec);
      },
    });

    return !!session.tokens;
  } catch (error) {
    console.error('Authentication error:', error);
    return false;
  }
}
