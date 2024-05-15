import moment from 'moment';
import { messageType } from '@/types/types';

import Modal from '@/components/molecules/Modal';
import InboxMessage from './InboxMessage';
import { TableCell } from '@/components/ui/table';
import InboxDeleteButton from './InboxDeleteButton';

export default function InboxRow({
  message,
}: {
  message: messageType;
}) {
  return (
    <>
      <TableCell>
        <Modal
          title={message.title}
          body={<InboxMessage message={message} />}
        >
          {message.title}
        </Modal>
      </TableCell>
      <TableCell>
        <Modal
          title={message.title}
          body={<InboxMessage message={message} />}
        >
          {message.sender.username}
        </Modal>
      </TableCell>
      <TableCell>
        <Modal
          title={message.title}
          body={<InboxMessage message={message} />}
        >
          {moment(message.createdAt).format(
            'DD/MM/YYYY HH:mm'
          )}
        </Modal>
      </TableCell>
      <TableCell>
        <InboxDeleteButton messageId={message._id} />
      </TableCell>
    </>
  );
}
