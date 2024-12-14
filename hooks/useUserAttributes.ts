'use client'

import { useState, useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';

export function useUserAttributes() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [givenName, setGivenName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAttributes() {
      if (user) {
        try {
          setIsLoading(true);
          const attributes = await fetchUserAttributes();
          if (attributes.given_name) {
            setGivenName(attributes.given_name);
          }
          setError(null);
        } catch (error) {
          console.error('Error fetching user attributes:', error);
          setError(error instanceof Error ? error : new Error('Unknown error occurred'));
        } finally {
          setIsLoading(false);
        }
      } else {
        setGivenName(null);
        setIsLoading(false);
      }
    }

    fetchAttributes();
  }, [user]);

  return { givenName, isLoading, error };
}

