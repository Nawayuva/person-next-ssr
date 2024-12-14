import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Server } from 'lucide-react';

export default function ArchitectureCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Application Architecture</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ArchitectureItem
          icon={<Cpu className="h-5 w-5 mt-0.5 flex-shrink-0" />}
          description="The View Person List now renders content on the client side, providing a responsive and interactive user experience."
        />
        <ArchitectureItem
          icon={<Server className="h-5 w-5 mt-0.5 flex-shrink-0" />}
          description="APIs are securely stored on the server. We use server actions for data fetching, eliminating direct API calls from the client and enhancing security."
        />
      </CardContent>
    </Card>
  );
}

function ArchitectureItem({ icon, description }: { icon: React.ReactNode; description: string }) {
  return (
    <div className="flex items-start space-x-2">
      {icon}
      <p>{description}</p>
    </div>
  );
}

