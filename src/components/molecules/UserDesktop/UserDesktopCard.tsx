import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Subtitle from '@/components/atoms/Subtitle';
import UserDesktopStatRow from './UserDesktopStatRow';
import { useTranslations } from 'next-intl';
import PageHeader from '@/components/atoms/PageHeader';
import { employeeType } from '@/types/types';
import UserDesktopAvatar from './UserDesktopAvatar';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Progress } from '@/components/ui/progress';

export default function UserDesktopCard({
  user,
}: {
  user: employeeType;
}) {
  const t = useTranslations('desktop.employeeCard');

  const userAvatar = user.avatar;
  delete userAvatar?._id;

  return (
    <Card className='w-full shadow-md'>
      <PageHeader className='py-4 flex-row justify-between'>
        {t('employeeCard')}
      </PageHeader>
      <CardContent className='mt-4 xl:grid xl:grid-cols-3 gap-4'>
        <UserDesktopAvatar avatar={userAvatar} />
        <div className='xl:col-span-2'>
          <ul className='w-full mt-4 text-lg'>
            <li className='grid grid-cols-2 py-2'>
              <Subtitle>{t('name')}:</Subtitle>
              <div>{user.username}</div>
            </li>
            <Separator />
            <li className='grid grid-cols-2 py-2'>
              <Subtitle>{t('level')}:</Subtitle>
              <div>{user.stats.level}</div>
            </li>
            <Separator />
            <li className='grid grid-cols-2 py-2'>
              <Subtitle>{t('exp')}:</Subtitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='cursor-default'>
                    <div className='flex items-center'>
                      <Progress
                        value={
                          (user.stats.exp.current * 100) /
                          user.stats.exp.goal
                        }
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {user.stats.exp.current}/
                    {user.stats.exp.goal}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <ul>
                <UserDesktopStatRow
                  label={'brainHealth'}
                  value={user.stats.brainHealth}
                  visible={!!user.stats.pointsToSpend}
                />
                <Separator />
                <UserDesktopStatRow
                  label={'logic'}
                  value={user.stats.logic}
                  visible={!!user.stats.pointsToSpend}
                />
                <Separator />
                <UserDesktopStatRow
                  label={'stressResistance'}
                  value={user.stats.stressResistance}
                  visible={!!user.stats.pointsToSpend}
                />
                <Separator />
                <UserDesktopStatRow
                  label={'luck'}
                  value={user.stats.luck}
                  visible={!!user.stats.pointsToSpend}
                />
              </ul>
            </li>
          </ul>
          {user.stats.pointsToSpend ? (
            <p className='text-right'>
              {t('pointsToSpend')}:{' '}
              {user.stats.pointsToSpend}
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
