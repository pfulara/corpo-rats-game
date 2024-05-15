import React from 'react';
import { redirect } from 'next/navigation';

import DashboardHeader from '@/components/organisms/DashboardHeader';
import Sidebar from '@/components/organisms/Sidebar';
import { getMyUser } from '@/actions';

interface IProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: IProps) {
  const { user } = await getMyUser();
  if (!user.avatar) redirect('./create-character');
  return (
    <>
      <DashboardHeader />
      <main className='min-h-[calc(100vh-4rem)] lg:grid lg:grid-cols-12 p-4'>
        <div className='lg:col-span-2'>
          <Sidebar />
        </div>
        <div className='lg:pl-4 lg:pr-2 lg:col-span-10'>
          {children}
        </div>
      </main>
    </>
  );
}
