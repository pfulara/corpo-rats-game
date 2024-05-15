import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Card } from '@/components/ui/card';
import { getUrl } from '@/lib/utils';

interface IProps {
  item: {
    slug: string;
    label: string;
    icon: React.ReactNode;
    alert?: boolean;
  };
}

export default function SidebarItem({ item }: IProps) {
  const t = useTranslations('sidebar');
  const { slug, label, icon, alert } = item;

  return (
    <Link href={getUrl(slug)}>
      <Card
        className={`relative py-2 px-4 shadow-md bg-neutral-50 hover:shadow-lg hover:bg-neutral-200 font-semibold text-neutral-600 flex items-center gap-2 w-fit lg:w-full whitespace-nowrap hidden-scrollbar ${
          alert ? 'newMessage' : ''
        }`}
      >
        {icon}
        {t(`${label}`)}
      </Card>
    </Link>
  );
}
