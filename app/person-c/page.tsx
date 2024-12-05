// pages/people.tsx

'use client';

import { useEffect, useState } from 'react';
import { Person } from '../models/person'; // Adjust the import path as necessary
import { getPeople } from '../lib/api'; // Import the externalized function

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPeople();
      if (data) {
        setPeople(data);
      } else {
        setError('Failed to load data.');
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (error) {
    return <div>{error}</div>;
  }

  if (!people.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">People</h1>
      <table className="table-auto w-full">
        <thead className="text-left">
          <tr>
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="p-2">{person.firstName}</td>
              <td className="p-2">{person.lastName}</td>
              <td className="p-2">{person.phone}</td>
              <td className="p-2">{person.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeoplePage;
