import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          AWS Cyber Security Person App
        </Link>
        <div>
          <Button asChild variant="ghost" className="text-primary-foreground">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

