import { NextRequest, NextResponse } from 'next/server';
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import awsconfig from '../../aws-exports';

// Configure Amplify on the server side
Amplify.configure(awsconfig);

export async function GET(req: NextRequest) {
  try {
    // Attempt to retrieve the current authenticated user
    const user = await getCurrentUser();
    return NextResponse.json({ isAuthenticated: true, user: user.username });
  } catch (err) {
    // If an error is thrown, the user is not authenticated
    return NextResponse.json({ isAuthenticated: false });
  }
}

