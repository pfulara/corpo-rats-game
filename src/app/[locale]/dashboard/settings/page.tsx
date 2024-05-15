import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/atoms/PageHeader';

interface IMetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: IMetadataProps) {
  const t = await getTranslations({
    locale,
    namespace: 'settings',
  });

  return {
    title: t('title'),
  };
}

export default function Settings() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Card className='shadow-md'>
        <PageHeader>Language</PageHeader>
        <CardContent className='mt-4'>
          <Link href='/pl/dashboard/settings' locale='pl'>
            Polish
          </Link>
          <Link href='/en/dashboard/settings' locale='en'>
            English
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
