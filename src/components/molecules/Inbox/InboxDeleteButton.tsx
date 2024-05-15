'use client';
import { deleteMessage } from '@/actions';
import { useToast } from '@/components/ui/use-toast';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function InboxDeleteButton({
  messageId,
}: {
  messageId: string;
}) {
  const { toast } = useToast();
  const handleDeleteMessage = async () => {
    const res = await deleteMessage(messageId);

    if (res.error) {
      toast({
        description: res.error,
        variant: 'destructive',
      });
    }
  };
  return (
    <FaRegTrashAlt
      className='cursor-pointer'
      onClick={() => handleDeleteMessage()}
    />
  );
}
