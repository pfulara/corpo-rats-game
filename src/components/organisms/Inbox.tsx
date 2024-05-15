import React from 'react';
import { CardContent } from '../ui/card';
import InboxList from '../molecules/Inbox/InboxList';
import { getMessages } from '@/actions';

export default async function InboxPage() {
  const messages = await getMessages();

  return (
    <CardContent>
      {!messages.error && <InboxList messages={messages} />}
    </CardContent>
  );
}
