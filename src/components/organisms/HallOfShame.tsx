import React from 'react';
import { useTranslations } from 'next-intl';

import { Card, CardContent } from '@/components/ui/card';
import Subtitle from '@/components/atoms/Subtitle';
import PageHeader from '@/components/atoms/PageHeader';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import EmployeesTab from '../molecules/HallOfShame/EmployeesTab';
import TeamsTab from '../molecules/HallOfShame/TeamsTab';

export default function HallOfShame() {
  const t = useTranslations('hallOfShame');
  return (
    <Card>
      <PageHeader>
        <Subtitle className='!text-neutral-50'>
          {t('title')}
        </Subtitle>
      </PageHeader>
      <CardContent className='mt-4'>
        <Tabs defaultValue='employees'>
          <TabsList className='w-full grid grid-cols-2 gap-4 h-auto'>
            <TabsTrigger value='employees'>
              <Subtitle className='!text-base'>
                {t('tabs.employees')}
              </Subtitle>
            </TabsTrigger>
            <TabsTrigger value='teams'>
              <Subtitle className='text-base'>
                {t('tabs.teams')}
              </Subtitle>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='employees'>
            <EmployeesTab />
          </TabsContent>
          <TabsContent value='teams'>
            <TeamsTab />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
