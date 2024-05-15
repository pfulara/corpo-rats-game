import { getTranslations } from 'next-intl/server';

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
    namespace: 'hierarchy',
  });

  return {
    title: t('title'),
  };
}
export default function Hierarchy() {
  return <div>Hierarchy</div>;
}
