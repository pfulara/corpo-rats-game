import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { TableCell } from '@/components/ui/table';
import { getUrl } from '@/lib/utils';
import { employeeType } from '@/types/types';

import EmployeeCard from './EmployeeCard';
import Modal from '../Modal';

export default function EmployeeRow({
  user,
  index,
}: {
  user: employeeType;
  index: number;
}) {
  const t = useTranslations('desktop');

  return (
    <>
      <TableCell>{index}</TableCell>
      <TableCell>
        <Modal
          title={t('employeeCard.employeeCard')}
          body={<EmployeeCard employee={user} />}
        >
          {user.username}
        </Modal>
      </TableCell>
      <TableCell>{user.stats.level}</TableCell>
      <TableCell>
        {user.team ? (
          <Link
            href={getUrl(`dashboard/team/${user.team.id}`)}
            className='font-semibold underline'
          >
            {user.team.name}
          </Link>
        ) : (
          '-'
        )}
      </TableCell>
    </>
  );
}
