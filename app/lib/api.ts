'use server'

import { Person } from '../models/person';

export async function getPeople(): Promise<Person[] | null> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/person";
  const bearerToken = process.env.NEXT_PUBLIC_API_BEARER_TOKEN || "dummy";
  console.log('apiURL:', apiURL);
  console.log('bearerToken:', bearerToken);

  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'x-api-key': bearerToken,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch people. Server response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers),
        body: errorText
      });
      console.error(new Error().stack);
      return null;
    }

    const people: Person[] = await response.json();
    return people;
  } catch (error) {
    console.error('An error occurred while fetching people:', error);
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Stack trace:', error.stack);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}

