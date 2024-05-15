import React from 'react';
import Link from 'next/link';

import MainTitleWithLogo from '@/components/molecules/MainTitleWithLogo';
import { getUrl } from '@/lib/utils';

export default async function DashboardHeader() {
  return (
    <header className='h-16 bg-neutral-600 px-4 shadow-lg'>
      <div className='flex items-center h-full'>
        <Link href={getUrl('dashboard')}>
          <MainTitleWithLogo className='text-base text-white' />
        </Link>
      </div>
    </header>
  );
}
