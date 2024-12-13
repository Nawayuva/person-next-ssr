import { useState, useEffect } from 'react';
import { getCurrentUser, AuthUser } from 'aws-amplify/auth';

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unexpected error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { user, isLoading, error };
}

