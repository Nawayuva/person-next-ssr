import { NextRequest, NextResponse } from 'next/server';
import { Person } from '../../models/person';

// Mock data: An array of person objects
const mockPersonData: Person[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    phone: "+1234567890",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    dob: "1992-02-02",
    phone: "+0987654321",
  },
  // Add more mock data as needed
];

export async function GET(req: NextRequest) {
  return NextResponse.json(mockPersonData);
}

