import { useTranslations } from 'next-intl';

import Subtitle from '@/components/atoms/Subtitle';
import { Card } from '@/components/ui/card';
import { taskType } from '@/types/types';
import UserTaskStartButton from './UserTaskStartButton';

export default function UserTaskListItem({
  task,
}: {
  task: taskType;
}) {
  const t = useTranslations('desktop.tasks');
  return (
    <Card className='p-4 mb-4'>
      <Subtitle>{task.name}</Subtitle>
      <p className='text-sm'>{task.description}</p>
      <div className='grid grid-cols-2 items-center mt-4'>
        <div>
          <p>
            {t('energy')}:{' '}
            <span className='font-bold'>{task.energy}</span>
          </p>
        </div>
        <div className='text-right'>
          <UserTaskStartButton
            taskId={task._id}
            label={t('start')}
          />
        </div>
      </div>
    </Card>
  );
}
