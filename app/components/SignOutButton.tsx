'use client'

import { useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';
import { clearServerSession } from '../actions/auth';

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      // Sign out from Amplify
      await signOut();
      
      // Clear the server-side session
      await clearServerSession();
      
      // Refresh the router to update the UI
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
      // You might want to show an error message to the user here
    }
  }

  return (
    <button
      onClick={handleSignOut}
      className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
}

