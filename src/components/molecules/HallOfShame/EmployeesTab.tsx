import { getTranslations } from 'next-intl/server';

import PageHeader from '@/components/atoms/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import EmployeeRow from './EmployeeRow';

import { employeeType } from '@/types/types';
import { getUsersRanking } from '@/actions';

export default async function EmployeesTab() {
  const { users } = await getUsersRanking();
  const t = await getTranslations();
  return (
    <Card>
      <PageHeader>
        {t('hallOfShame.employeesList.employeesRanking')}
      </PageHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-12'>#</TableHead>
              <TableHead>
                {t('desktop.employeeCard.name')}
              </TableHead>
              <TableHead className='w-20'>
                {t('desktop.employeeCard.level')}
              </TableHead>
              <TableHead>
                {t('desktop.employeeCard.team')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(
              (employee: employeeType, index: number) => (
                <TableRow key={employee._id}>
                  <EmployeeRow
                    index={index + 1}
                    user={employee}
                  />
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
