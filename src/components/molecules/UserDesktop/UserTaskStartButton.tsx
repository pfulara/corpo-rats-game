'use client';

import { finishTask, startTask } from '@/actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function UserTaskStartButton({
  taskId,
  label,
}: {
  taskId: string;
  label: string;
}) {
  const { toast } = useToast();

  const handleStartTask = async (taskId: string) => {
    const res = await startTask(taskId);
    // const res = await finishTask(taskId);

    if (res.error) {
      toast({
        description: res.error,
        variant: 'destructive',
      });
    }
  };
  return (
    <Button onClick={() => handleStartTask(taskId)}>
      {label}
    </Button>
  );
}
