'use client';
import { useRouter } from 'next/navigation';

import Title from '@/components/atoms/Title';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/atoms/PageHeader';

export default function DashboardNotFound() {
  const router = useRouter();
  return (
    <div className='flex justify-center mt-8 px-4'>
      <Card className='text-center'>
        <PageHeader>
          <Title>404?</Title>
        </PageHeader>
        <CardContent>
          <p>
            It seems like the page what your're looking for
            doesn't exist
          </p>
          <p className='mt-4'>
            Get{' '}
            <span
              className='font-semibold cursor-pointer'
              onClick={() => router.back()}
            >
              back
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
