'use client';
import { getSession } from 'next-auth/react';
import { User } from '@/app/@types/user';

async function getTokenSession(): Promise<string | null> {
  const session = await getSession();
  if (!session) {
    return Promise.reject(null);
  }
  const user: User = session.user;
  return Promise.resolve(user.token);
}

export default getTokenSession;
