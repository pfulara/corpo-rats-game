'use client';
import moment from 'moment';
import { useEffect, useState } from 'react';

import { finishTask } from '@/actions';
import { Progress } from '@/components/ui/progress';
import Loader from '@/components/atoms/Loader';
import UserTaskFinishButton from './UserTaskFinishButton';

export default function UserTaskRunningTimer({
  taskId,
  startAt,
  endAt,
}: {
  taskId: string;
  startAt: string;
  endAt: string;
}) {
  const [timer, setTimer] = useState(0);
  const [loadedTimer, setLoadedTimer] = useState(false);
  const [finishButton, setFinishButton] = useState(false);
  const start = moment(startAt);
  const end = moment(endAt);

  const fullTime = end.diff(start, 'seconds');

  useEffect(() => {
    const interval = setInterval(() => {
      const current = moment();
      setTimer(end.diff(current, 'seconds'));

      if (!loadedTimer) {
        setLoadedTimer(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (loadedTimer && timer < 1) {
      setFinishButton(true);
    }
  }, [loadedTimer, timer]);

  return (
    <div>
      {finishButton ? (
        <div className='flex justify-center mt-4'>
          <UserTaskFinishButton taskId={taskId} />
        </div>
      ) : loadedTimer ? (
        <div className='mt-4 text-center text-lg font-semibold'>
          {`${timer}s / ${fullTime}s`}
          <Progress value={(timer * 100) / fullTime} />
        </div>
      ) : (
        <div className='mt-4 flex justify-center'>
          <Loader />
        </div>
      )}
    </div>
  );
}
