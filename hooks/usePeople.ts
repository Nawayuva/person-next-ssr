import { useState, useEffect } from 'react';
import { Person } from '@/app/models/person';
import { getPeople } from '@/app/lib/api';

export function usePeople() {
  const [people, setPeople] = useState<Person[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const fetchedPeople = await getPeople();
        setPeople(fetchedPeople);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unexpected error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchPeople();
  }, []);

  return { people, isLoading, error };
}

