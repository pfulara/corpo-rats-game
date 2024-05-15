import PageHeader from '@/components/atoms/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { taskType } from '@/types/types';
import { useTranslations } from 'next-intl';
import UserTaskListItem from './UserTaskListItem';

export default function UserTaskList({
  tasksList,
}: {
  tasksList: taskType[];
}) {
  const t = useTranslations('desktop.tasks');
  return (
    <Card className='w-full shadow-md min-h-[700px]'>
      <PageHeader className='py-4 flex-row justify-between'>
        {t('tasks')}
      </PageHeader>
      <CardContent className='mt-4'>
        {tasksList?.map((task) => (
          <UserTaskListItem key={task._id} task={task} />
        ))}
      </CardContent>
    </Card>
  );
}
