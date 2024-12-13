import { checkAuth } from '@/lib/checkAuth';
import SignOutButton from './SignOutButton';

export async function ServerAuthStatus() {
  const isAuthenticated = await checkAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, User!</p>
          <SignOutButton />
        </div>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
  );
}

