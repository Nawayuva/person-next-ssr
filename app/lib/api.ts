// lib/api.ts

import { Person } from '../models/person'; // Adjust the path as necessary

export const getPeople = async (): Promise<Person[] | null> => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/person";
  const bearerToken = process.env.NEXT_PUBLIC_API_BEARER_TOKEN || "dummy";

  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        // 'Authorization': `Bearer ${bearerToken}`,
        'x-api-key': bearerToken,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch people');
      return null;
    }

    const people: Person[] = await response.json();
    return people;
  } catch (error) {
    console.error('An error occurred while fetching people:', error);
    return null;
  }
};
