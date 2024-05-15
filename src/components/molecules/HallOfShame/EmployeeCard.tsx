import Link from 'next/link';

import { CardContent } from '@/components/ui/card';
import { employeeType } from '@/types/types';

import { Separator } from '@/components/ui/separator';
import { getUrl } from '@/lib/utils';
import EmployeeCardRow from '@/components/atoms/EmployeeCardRow';
import { useTranslations } from 'next-intl';
import EmployeeCardAvatar from './EmployeeCardAvatar';
import EmployeeSendMessage from './EmployeeSendMessage';

export default function EmployeeCard({
  employee: { _id, username, avatar, team, stats },
}: {
  employee: employeeType;
}) {
  const t = useTranslations();

  return (
    <CardContent className='grid lg:grid-cols-2 gap-4'>
      <div>
        <EmployeeCardAvatar avatar={avatar} />
        <EmployeeSendMessage recipientId={_id} />
      </div>

      <div>
        <EmployeeCardRow
          label={t('desktop.employeeCard.name')}
          value={username}
        />
        <Separator />
        <EmployeeCardRow
          label={t('desktop.employeeCard.level')}
          value={stats.level}
        />
        <Separator />
        <EmployeeCardRow
          label={t('desktop.employeeCard.team')}
          value={
            team ? (
              <Link
                className='underline'
                href={getUrl(`dashboard/team/${team.id}`)}
              >
                {team.name}
              </Link>
            ) : (
              '-'
            )
          }
        />
        <Separator />
        <EmployeeCardRow
          label={t('desktop.employeeCard.brainHealth')}
          value={stats.brainHealth}
        />
        <Separator />
        <EmployeeCardRow
          label={t('desktop.employeeCard.logic')}
          value={stats.logic}
        />
        <Separator />
        <EmployeeCardRow
          label={t('desktop.employeeCard.stressResistance')}
          value={stats.stressResistance}
        />
        <Separator />
        <EmployeeCardRow
          label={t('desktop.employeeCard.luck')}
          value={stats.luck}
        />
      </div>
    </CardContent>
  );
}
