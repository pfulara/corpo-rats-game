import { getTranslations } from 'next-intl/server';

import HallOfShame from '@/components/organisms/HallOfShame';
import { Suspense } from 'react';
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
    namespace: 'hallOfShame',
  });

  return {
    title: t('title'),
  };
}

export default function Ranking() {
  return (
    <Suspense fallback={<Loading />}>
      <HallOfShame />
    </Suspense>
  );
}
