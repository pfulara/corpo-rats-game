'use server';
import fetch from '@/lib/fetch';

export async function signIn(values: {
  email: string;
  password: string;
}) {
  const res = await fetch('/auth/signin', {
    method: 'POST',
    body: JSON.stringify(values),
  });

  const data = await res.json();

  return data;
}

export async function signUp(values: {
  email: string;
  password: string;
}) {
  const res = await fetch('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(values),
  });

  const data = await res.json();

  return data;
}
