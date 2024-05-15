import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { messageType } from '@/types/types';
import { flagReadMessage } from '@/actions';
import moment from 'moment';

export default function InboxMessage({
  message,
}: {
  message: messageType;
}) {
  if (message.unread) {
    flagReadMessage(message._id);
  }
  const t = useTranslations('inbox');
  return (
    <CardContent>
      <div className='flex gap-2 mt-2 px-4'>
        <p>{t('message.from')}:</p>
        <p className='font-semibold'>
          {message.sender.username}
        </p>
      </div>
      <Separator />
      <div className='flex gap-2 mt-2 px-4'>
        <p>{t('message.date')}:</p>
        <p className='font-semibold'>
          {moment(message.createdAt).format(
            'DD/MM/YYYY HH:mm'
          )}
        </p>
      </div>
      <Separator />
      <Label>
        <p className='mt-4 px-4 mb-2'>
          {t('header.title')}:
        </p>
      </Label>
      <p className='mb-4 border border-neutral-200 px-4 py-2 rounded-md'>
        {message.title}
      </p>
      <Label>
        <p className='mt-4 px-4 mb-2'>
          {t('message.message')}:
        </p>
      </Label>
      <p className='mb-4 border border-neutral-200 p-4 rounded-md'>
        {message.message}
      </p>
      <Label>
        <p className='px-4 mb-2'>{t('message.answer')}:</p>
        <Textarea className='p-4' />
      </Label>
      <div className='mt-4 flex justify-end'>
        <Button>{t('message.send')}</Button>
      </div>
    </CardContent>
  );
}
