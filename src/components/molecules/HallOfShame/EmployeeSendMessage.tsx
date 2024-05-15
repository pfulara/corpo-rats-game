import React from 'react';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Modal from '../Modal';
import EmployeeSendMessageForm from './EmployeeSendMessageForm';
import pick from 'lodash/pick';

export default function EmployeeSendMessage({
  recipientId,
}: {
  recipientId: string;
}) {
  const t = useTranslations('inbox.message');
  const messages = useMessages();
  return (
    <Modal
      title={t('message')}
      body={
        <NextIntlClientProvider
          messages={pick(messages, 'inbox')}
        >
          <EmployeeSendMessageForm
            recipientId={recipientId}
          />
        </NextIntlClientProvider>
      }
    >
      <div className='mt-4 mx-auto text-center w-fit py-2 px-4 rounded-xl text-neutral-50 bg-neutral-600 hover:bg-neutral-600/80'>
        {t('sendMessage')}
      </div>
    </Modal>
  );
}
