import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

import { getMyUser } from '@/actions';
import CreateCharacterPage from '@/components/organisms/CreateCharacterPage';

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
    namespace: 'createCharacter',
  });

  return {
    title: t('title'),
  };
}

export default async function CreateCharacter() {
  const { user } = await getMyUser();
  const lang = useLocale();
  if (user?.username) redirect(`/${lang}/dashboard`);

  return <CreateCharacterPage />;
}
