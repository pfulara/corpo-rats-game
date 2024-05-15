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
    namespace: 'team',
  });

  return {
    title: t('title'),
  };
}

export default function Team() {
  return <div>Team</div>;
}
