'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Card } from '@/components/ui/card';
import { getUrl } from '@/lib/utils';
import moment from 'moment';
import { userTaskType } from '@/types/types';

interface IProps {
  item: {
    slug: string;
    label: string;
    icon: React.ReactNode;
    task: userTaskType;
  };
}

export default function SidebarItemWithTimer({
  item,
}: IProps) {
  const { slug, label, icon, task } = item;
  const endTime = moment(task.endAt);
  const currentTime = moment();

  const [timer, setTimer] = useState(
    endTime.diff(currentTime, 'seconds')
  );
  const [alert, setAlert] = useState(false);
  const [loadedTimer, setLoadedTimer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = moment();
      if (currentTime < endTime) {
        setTimer(endTime.diff(currentTime, 'seconds'));
      } else {
        setTimer(0);
      }

      if (!loadedTimer) {
        setLoadedTimer(true);
      }

      if (!task.isPending) {
        setAlert(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [task]);

  useEffect(() => {
    if (loadedTimer && task.isPending && timer < 1) {
      setAlert(true);
    }
  }, [loadedTimer, timer]);

  return (
    <Link href={getUrl(slug)}>
      <Card
        className={`relative py-2 px-4 shadow-md bg-neutral-50 hover:shadow-lg hover:bg-neutral-200 font-semibold text-neutral-600 flex items-center gap-2 w-fit lg:w-full whitespace-nowrap hidden-scrollbar ${
          alert ? 'newMessage' : ''
        }`}
      >
        {icon}
        {label}
        {loadedTimer && timer ? ` (${timer}s)` : null}
      </Card>
    </Link>
  );
}
