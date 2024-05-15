'use server';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import fetch from '@/lib/fetch';
import { formSchema } from '@/components/molecules/CreateCharacter/CreateCharacterForm';

export async function addStat(key: string) {
  await fetch('/users/add-stat', {
    method: 'POST',
    body: JSON.stringify({ key }),
  });
  revalidateTag('user');
  revalidateTag('ranking');
}

export const saveNewCharacter = async (
  values: z.infer<typeof formSchema>
) => {
  const { username, ...avatar } = values;

  const res = await fetch('/users/save-new-character', {
    method: 'POST',
    body: JSON.stringify({ username, avatar }),
  });

  const data = await res.json();

  if (data.error) {
    return data;
  }

  if (res.ok) {
    revalidateTag('user');
  }
};

export const getMyUser = async () => {
  const res = await fetch(`/users/me`, {
    cache: 'default',
    next: { tags: ['user'] },
  });

  const data = await res?.json();

  if (!Object.values(data).length || data.error)
    redirect('/');
  return data;
};

export const getUsersRanking = async () => {
  const res = await fetch(`/users/ranking`, {
    cache: 'no-cache',
    next: {
      tags: ['ranking'],
    },
  });

  const data = await res.json();
  return data;
};

export const refetchUser = () => {
  revalidateTag('user');
};
