import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldCheck } from 'lucide-react';

export default function AlertSection() {
  return (
    <Alert>
      <ShieldCheck className="h-4 w-4" />
      <AlertTitle>Authenticated Access Only</AlertTitle>
      <AlertDescription>
        This page is secured using AWS Cognito. Only authenticated users can access the content.
      </AlertDescription>
    </Alert>
  );
}

