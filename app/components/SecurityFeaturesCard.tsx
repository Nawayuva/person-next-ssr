import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Server, Key, EyeOff, Globe } from 'lucide-react'

export default function SecurityFeaturesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Security Features</CardTitle>
        <CardDescription>Our app implements multiple layers of security to protect your data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <SecurityFeature
          icon={<Shield className="h-6 w-6" />}
          title="AWS Amplify & Cognito"
          description="We use AWS Amplify for authentication, leveraging the power of AWS Cognito User Pools for secure user management and authentication flows."
          link="https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/"
        />
        <SecurityFeature
          icon={<Lock className="h-6 w-6" />}
          title="Session Management in Next.js"
          description="Secure session management is implemented using Next.js 15.1 features, ensuring that user sessions are handled safely on both client and server sides."
          link="https://nextjs.org/docs/app/building-your-application/authentication"
        />
        <SecurityFeature
          icon={<Server className="h-6 w-6" />}
          title="Server Actions"
          description="Next.js 15.1 Server Actions are utilized for secure data mutations, preventing direct API access from the client and enhancing overall application security."
          link="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions"
        />
        <SecurityFeature
          icon={<Key className="h-6 w-6" />}
          title="AWS Cognito User Pool"
          description="Our app uses AWS Cognito User Pool for robust user authentication, offering features like multi-factor authentication, password policies, and secure user data storage."
          link="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"
        />
        <SecurityFeature
          icon={<EyeOff className="h-6 w-6" />}
          title="Environment Variable Protection"
          description="We've removed NEXT_PUBLIC_ prefixes from sensitive environment variables, leveraging Next.js built-in security to prevent accidental exposure to client-side components."
          link="https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#environment-variable-load-order"
        />
        <SecurityFeature
          icon={<Globe className="h-6 w-6" />}
          title="Server-Side API Requests"
          description="We've eliminated client-side fetch operations, moving all API requests to the server. This prevents exposure of API endpoints and credentials, enhancing overall application security."
          link="https://nextjs.org/docs/app/building-your-application/data-fetching/patterns"
        />
      </CardContent>
    </Card>
  )
}

function SecurityFeature({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-1 bg-primary-foreground p-2 rounded-full">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {title}
          </a>
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
