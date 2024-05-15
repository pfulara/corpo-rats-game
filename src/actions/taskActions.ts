'use server';
import fetch from '@/lib/fetch';
import { revalidateTag } from 'next/cache';

export const getTasks = async (energy: number) => {
  const res = await fetch('/tasks/get-tasks-list', {
    method: 'POST',
    body: JSON.stringify({ energy }),
    cache: 'force-cache',
    next: { tags: ['tasks'] },
  });

  const data = await res.json();

  return data;
};

export const startTask = async (taskId: string) => {
  const res = await fetch('/tasks/start-task', {
    method: 'POST',
    body: JSON.stringify({ taskId }),
  });

  const data = await res.json();

  if (!data.error) {
    revalidateTag('user');
  }

  return data;
};

export const finishTask = async (taskId: string) => {
  const res = await fetch('/tasks/finish-task', {
    method: 'POST',
    body: JSON.stringify({ taskId }),
  });

  const data = await res.json();

  return data;
};

export const resetTasks = () => {
  revalidateTag('tasks');
  revalidateTag('user');
};
