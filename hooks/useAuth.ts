'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser, AuthUser } from 'aws-amplify/auth'
import { setServerSession, clearServerSession } from '../app/actions/auth'

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function checkAuth() {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser)
        // Set server session when user is authenticated
        await setServerSession({ userId: currentUser.userId, email: currentUser.signInDetails?.loginId || '' })
      } catch (err) {
        console.error('Authentication error:', err)
        setError(err instanceof Error ? err : new Error('An unexpected error occurred'))
        // Clear server session when authentication fails
        try {
          await clearServerSession()
        } catch (clearErr) {
          console.error('Error clearing server session:', clearErr)
        }
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  return { user, isLoading, error }
}

