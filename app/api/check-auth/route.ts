import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '../../actions/auth';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session) {
      return NextResponse.json({ isAuthenticated: false }, { status: 401 });
    }

    return NextResponse.json({ 
      isAuthenticated: true,
      user: {
        userId: session.userId,
        email: session.email
      }
    });
  } catch (error) {
    console.error('Error checking authentication:', error);
    return NextResponse.json({ isAuthenticated: false, error: 'Internal server error' }, { status: 500 });
  }
}

