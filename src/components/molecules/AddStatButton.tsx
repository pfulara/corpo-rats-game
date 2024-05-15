'use client';
import { Button } from '@/components/ui/button';
import { addStat } from '@/actions';

export default function AddStatButton({
  label,
}: {
  label: string;
}) {
  const handleAddStat = () => {
    addStat(label);
  };

  return (
    <Button
      onClick={() => handleAddStat()}
      className='w-7 h-7 p-0'
    >
      +
    </Button>
  );
}
