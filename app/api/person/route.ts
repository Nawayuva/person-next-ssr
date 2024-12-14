import { NextRequest, NextResponse } from 'next/server';
import { Person } from '../../models/person';
import { getServerSession } from '../../actions/auth';

const mockPersonData: Person[] = [
  {
    id: 1,
    firstName: "Charlotte",
    lastName: "Smith",
    dob: "1990-05-15",
    phone: "0412 345 678",
  },
  {
    id: 2,
    firstName: "Oliver",
    lastName: "Jones",
    dob: "1988-11-23",
    phone: "0423 456 789",
  },
  {
    id: 3,
    firstName: "Ava",
    lastName: "Williams",
    dob: "1995-03-07",
    phone: "0434 567 890",
  },
  {
    id: 4,
    firstName: "Noah",
    lastName: "Brown",
    dob: "1992-09-18",
    phone: "0445 678 901",
  },
  {
    id: 5,
    firstName: "Mia",
    lastName: "Wilson",
    dob: "1987-12-30",
    phone: "0456 789 012",
  },
  {
    id: 6,
    firstName: "William",
    lastName: "Taylor",
    dob: "1993-06-25",
    phone: "0467 890 123",
  },
  {
    id: 7,
    firstName: "Sophia",
    lastName: "Anderson",
    dob: "1991-02-14",
    phone: "0478 901 234",
  },
  {
    id: 8,
    firstName: "Liam",
    lastName: "Thomas",
    dob: "1989-08-09",
    phone: "0489 012 345",
  },
  {
    id: 9,
    firstName: "Isabella",
    lastName: "Roberts",
    dob: "1994-04-03",
    phone: "0490 123 456",
  },
  {
    id: 10,
    firstName: "James",
    lastName: "Walker",
    dob: "1986-10-11",
    phone: "0401 234 567",
  },
];

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  const emptyPerson: Person[] = [];
  

  if (!session) {
    return NextResponse.json(emptyPerson, { status: 401 });
  }

  return NextResponse.json(mockPersonData);
}

