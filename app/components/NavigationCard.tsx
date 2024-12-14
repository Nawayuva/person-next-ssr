import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NavigationCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <nav className="space-y-2">
          <NavigationButton href="/person-c" label="Authenticated Person List" />
          <NavigationButton href="/api/person" label="Authenticated API " />
        </nav>
      </CardContent>
    </Card>
  );
}

function NavigationButton({ href, label }: { href: string; label: string }) {
  return (
    <Button asChild variant="ghost" className="w-full justify-start">
      <Link href={href}>{label}</Link>
    </Button>
  );
}

