'use server';
import fetch from '@/lib/fetch';
import { revalidateTag } from 'next/cache';

export const sendMessage = async ({
  title,
  message,
  recipient,
}: {
  title: string;
  message: string;
  recipient: string;
}) => {
  const res = await fetch('/messages/send', {
    method: 'POST',
    body: JSON.stringify({ title, message, recipient }),
  });

  const data = await res.json();

  return data;
};

export const getMessages = async () => {
  const res = await fetch('/messages/get-messages', {
    cache: 'no-cache',
    next: { tags: ['messages'] },
  });

  const data = await res.json();

  return data;
};

export const deleteMessage = async (messageId: string) => {
  const res = await fetch('/messages/delete', {
    method: 'POST',
    body: JSON.stringify({ messageId }),
  });

  const data = await res.json();

  if (!data.error) {
    revalidateTag('messages');
    revalidateTag('user');
  }

  return data;
};

export const flagReadMessage = async (
  messageId: string
) => {
  const res = await fetch('/messages/flag-read', {
    method: 'POST',
    body: JSON.stringify({ messageId }),
  });

  const data = await res.json();

  if (!data.error) {
    revalidateTag('messages');
    revalidateTag('user');
  }
};
