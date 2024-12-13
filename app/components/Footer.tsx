import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";

export function Footer() {
  return (
    <Card className="mt-auto">
      <CardContent className="text-center py-4">
        <p className="text-sm text-muted-foreground">Authored by Callum Bir</p>
        <Link 
          href="https://github.com/gocallum" 
          className="text-sm text-blue-500 hover:text-blue-700 underline"
        >
          Visit my GitHub
        </Link>
      </CardContent>
    </Card>
  );
}

