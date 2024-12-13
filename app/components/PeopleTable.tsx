import { Person } from '../models/person';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface PeopleTableProps {
  people: Person[];
}

export function PeopleTable({ people }: PeopleTableProps) {
  return (
    <Table>
      <TableCaption>A list of people</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Date of Birth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((person) => (
          <TableRow key={person.id}>
            <TableCell>{person.firstName}</TableCell>
            <TableCell>{person.lastName}</TableCell>
            <TableCell>{person.phone}</TableCell>
            <TableCell>{person.dob}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

