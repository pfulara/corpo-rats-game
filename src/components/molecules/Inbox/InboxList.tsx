import { useTranslations } from 'next-intl';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import InboxRow from './InboxRow';
import { messageType } from '@/types/types';

export default function InboxList({
  messages,
}: {
  messages: messageType[];
}) {
  const t = useTranslations('inbox');
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {/* <TableHead className='w-8'></TableHead> */}
          <TableHead>{t('header.title')}</TableHead>
          <TableHead>{t('header.sender')}</TableHead>
          <TableHead>{t('header.date')}</TableHead>
          <TableHead className='w-8'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {messages.map((msg) => (
          <TableRow
            key={msg._id}
            className={`${
              msg.unread
                ? 'font-semibold bg-neutral-100'
                : ''
            }`}
          >
            <InboxRow message={msg} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
