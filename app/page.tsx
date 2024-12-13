import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldCheck, Server, Cpu } from 'lucide-react';
import UserCard from './components/UserCard';

export default function HomePage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <UserCard />
      
      <Alert>
        <ShieldCheck className="h-4 w-4" />
        <AlertTitle>Authenticated Access Only</AlertTitle>
        <AlertDescription>
          This page is secured using AWS Cognito. Only authenticated users can access the content.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Application Architecture</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-2">
            <Cpu className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p>
              The View Person List now renders content on the client side, providing a responsive and interactive user experience.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <Server className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p>
              APIs are securely stored on the server. We use server actions for data fetching, eliminating direct API calls from the client and enhancing security.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <nav className="space-y-2">
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/person-c">
                View Person List
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/api/person">
                API Documentation
              </Link>
            </Button>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
}

