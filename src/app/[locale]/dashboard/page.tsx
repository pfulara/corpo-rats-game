import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';

import Desktop from '@/components/organisms/Desktop';
import Loading from '@/app/[locale]/loading';

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
    namespace: 'desktop',
  });

  return {
    title: t('title'),
  };
}

export default async function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <Desktop />
    </Suspense>
  );
}
