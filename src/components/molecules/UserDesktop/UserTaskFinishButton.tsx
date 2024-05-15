'use client';

import { finishTask, resetTasks } from '@/actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

import BattleModal from '@/components/organisms/BattleModal';
import { useTranslations } from 'next-intl';

export default function UserTaskFinishButton({
  taskId,
}: {
  taskId: string;
}) {
  const t = useTranslations('desktop.tasks');
  const { toast } = useToast();
  const [modal, setModal] = useState(false);
  const [battle, setBattle] = useState({
    turns: [],
    player: null,
    enemy: null,
  });

  const handleStartTask = async (taskId: string) => {
    const res = await finishTask(taskId);

    if (res.error) {
      toast({
        description: res.error,
        variant: 'destructive',
      });
    }
    if (res.battle) {
      setModal(true);
      setBattle(res.battle);
    }
  };

  const onOpenChange = (state: boolean) => {
    resetTasks();
    setModal(state);
  };
  return (
    <>
      <Button onClick={() => handleStartTask(taskId)}>
        {t('finish')}
      </Button>
      {modal ? (
        <BattleModal
          open={modal}
          onOpenChange={onOpenChange}
          battle={battle}
        />
      ) : null}
    </>
  );
}
