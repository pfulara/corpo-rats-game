import React from 'react';
import { notFound } from 'next/navigation';

import { getMyUser } from '@/actions';
import PageHeader from '@/components/atoms/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { getUrl } from '@/lib/utils';
import Link from 'next/link';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getMyUser();

  if (!user.admin) {
    return notFound();
  }

  return (
    <Card className='h-full relative'>
      <PageHeader>Admin Panel</PageHeader>
      <CardContent>
        <div className='grid grid-cols-5 gap-4'>
          <div>
            <Link href={getUrl('dashboard/admin')}>
              <Card className='px-4 py-2 shadow-md hover:shadow-lg hover:bg-neutral-100 font-semibold text-neutral-600 mb-4'>
                Użytkownicy
              </Card>
            </Link>
            <Link href={getUrl('dashboard/admin/tasks')}>
              <Card className='px-4 py-2 shadow-md hover:shadow-lg hover:bg-neutral-100 font-semibold text-neutral-600 mb-4'>
                Zadania
              </Card>
            </Link>
            <Link
              href={getUrl('dashboard/admin/encounters')}
            >
              <Card className='px-4 py-2 shadow-md hover:shadow-lg hover:bg-neutral-100 font-semibold text-neutral-600 mb-4'>
                Przeciwnicy
              </Card>
            </Link>
          </div>
          <div className='col-span-4'>{children}</div>
        </div>
      </CardContent>
    </Card>
  );
}
