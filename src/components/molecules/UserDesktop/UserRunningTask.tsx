import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/atoms/PageHeader';
import { runningTaskType } from '@/types/types';
import Subtitle from '@/components/atoms/Subtitle';
import UserTaskRunningTimer from './UserTaskRunningTimer';
import pick from 'lodash/pick';

export default function UserRunningTask({
  task,
}: {
  task: runningTaskType;
}) {
  const t = useTranslations('desktop.tasks');

  const messages = useMessages();

  return (
    <Card className='w-full shadow-md min-h-[700px]'>
      <PageHeader className='py-4 flex-row justify-between'>
        {t('tasks')}
      </PageHeader>
      <CardContent>
        <Subtitle>{task.task.name}</Subtitle>
        <p className='mt-4 text-sm'>
          {task.task.description}
        </p>
        <NextIntlClientProvider
          messages={pick(messages, 'desktop.tasks')}
        >
          <UserTaskRunningTimer
            taskId={task.task.id}
            startAt={task.startAt}
            endAt={task.endAt}
          />
        </NextIntlClientProvider>
      </CardContent>
    </Card>
  );
}
