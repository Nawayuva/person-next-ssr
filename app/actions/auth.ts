'use server'

import { cookies } from 'next/headers'

export async function setServerSession(sessionData: { userId: string; email: string }) {
  try {
    const cookieStore = await cookies()
    cookieStore.set('session', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })
  } catch (error) {
    console.error('Error setting server session:', error)
    throw new Error('Failed to set server session')
  }
}

export async function getServerSession() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')
    if (!session) return null
    return JSON.parse(session.value) as { userId: string; email: string }
  } catch (error) {
    console.error('Error getting server session:', error)
    return null
  }
}

export async function clearServerSession() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('session')
  } catch (error) {
    console.error('Error clearing server session:', error)
    throw new Error('Failed to clear server session')
  }
}

