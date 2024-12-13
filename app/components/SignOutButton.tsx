'use client'

import { useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOut();
      router.refresh();
    } catch (error) {
      console.log('error signing out: ', error);
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

