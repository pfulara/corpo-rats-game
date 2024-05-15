import InboxPage from '@/components/organisms/Inbox';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import Loading from '../../loading';
import { Card } from '@/components/ui/card';
import PageHeader from '@/components/atoms/PageHeader';
import Subtitle from '@/components/atoms/Subtitle';
import { useTranslations } from 'next-intl';

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
    namespace: 'inbox',
  });

  return {
    title: t('title'),
  };
}

export default function Inbox() {
  const t = useTranslations('inbox');
  return (
    <Suspense fallback={<Loading />}>
      <Card>
        <PageHeader>
          <Subtitle className='!text-neutral-50'>
            {t('title')}
          </Subtitle>
        </PageHeader>
        <InboxPage />
      </Card>
    </Suspense>
  );
}
