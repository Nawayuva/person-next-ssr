'use server'

import { Person } from '../models/person';
import { getServerSession } from './auth';
import { cookies } from 'next/headers';

export async function getPeople(): Promise<Person[] | null> {
  const apiURL = process.env.API_URL || "http://localhost:3000/api/person";
  const apiKey = process.env.BEARER_TOKEN || "dummy";
  console.log('apiURL:', apiURL);

  // Check if the user is authenticated
  const session = await getServerSession();
  if (!session) {
    console.error('User is not authenticated');
    return null;
  }

  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');

    const response = await fetch(apiURL, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
        'Cookie': `session=${sessionCookie?.value || ''}`,
        'Authorization': `Bearer ${session.userId}`, // Assuming userId can be used as a bearer token
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

