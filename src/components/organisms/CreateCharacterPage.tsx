import React from 'react';
import pick from 'lodash/pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/atoms/PageHeader';
import Subtitle from '@/components/atoms/Subtitle';

import CreateCharacterForm from '@/components/molecules/CreateCharacter/CreateCharacterForm';

export default function CreateCharacterPage() {
  const messages = useMessages();
  const t = useTranslations('createCharacter');
  return (
    <main className='px-4 flex justify-center'>
      <Card className='mt-8 w-full max-w-[840px]'>
        <PageHeader>
          <Subtitle className='!text-base !text-neutral-50'>
            {t('title')}
          </Subtitle>
        </PageHeader>
        <CardContent>
          <NextIntlClientProvider
            messages={pick(messages, 'createCharacter')}
          >
            <CreateCharacterForm />
          </NextIntlClientProvider>
        </CardContent>
      </Card>
    </main>
  );
}
