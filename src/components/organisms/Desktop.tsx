import { getTranslations } from 'next-intl/server';

import QuitButton from '@/components/molecules/QuitButton';
import UserTaskList from '@/components/molecules/UserDesktop/UserTaskList';
import UserDesktopCard from '@/components/molecules/UserDesktop/UserDesktopCard';
import UserStats from '@/components/molecules/UserDesktop/UserStats';
import UserRunningTask from '@/components/molecules/UserDesktop/UserRunningTask';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import PageHeader from '@/components/atoms/PageHeader';
import { getMyUser, getTasks } from '@/actions';

export default async function Desktop() {
  const { user } = await getMyUser();

  let tasksList = [];
  if (!user.task.isPending) {
    const { tasks } = await getTasks(user.stats.energy);
    tasksList = tasks;
  }

  const t = await getTranslations('desktop');

  return (
    <Card className='min-h-full'>
      {user ? (
        <>
          <PageHeader className='p-0 justify-between flex-row items-center'>
            <div className='px-6 text-neutral-50 w-96 flex items-center gap-4'>
              {t('energy')}:
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='w-full cursor-default'>
                    <Progress
                      value={user.stats.energy}
                      className='bg-neutral-50/50'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    {user.stats.energy}/100
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <QuitButton
              alert={{
                boss: t('quitButton.boss'),
                message: t('quitButton.message'),
              }}
            />
          </PageHeader>
          <CardContent className='mt-4 px-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-4'>
            {user.task.isPending ? (
              <UserRunningTask task={user.task} />
            ) : (
              <UserTaskList tasksList={tasksList} />
            )}
            <div className='lg:col-span-2 mt-4 lg:mt-0'>
              <UserDesktopCard user={user} />
              {/* <UserStats stats={user.stats} /> */}
            </div>
          </CardContent>
        </>
      ) : (
        <CardContent className='pt-6 text-center'>
          Error
        </CardContent>
      )}
    </Card>
  );
}
