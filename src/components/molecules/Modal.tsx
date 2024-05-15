'use client';
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import Subtitle from '@/components/atoms/Subtitle';
import PageHeader from '@/components/atoms/PageHeader';
import CardCloseButton from '@/components/atoms/CardCloseButton';

interface IProps {
  children: React.ReactNode;
  title: string;
  body: React.ReactNode;
}

export default function Modal({
  children,
  title,
  body,
}: IProps) {
  return (
    <Dialog>
      <DialogTrigger className='w-full min-h-3 text-left'>
        {children}
      </DialogTrigger>
      <DialogContent className='bg-tranparent p-0 border-0 max-w-[640px] w-full px-4'>
        <DialogHeader className='mt-0'>
          <Card>
            <PageHeader className='p-0 justify-between flex-row items-center'>
              <div className='px-6'>
                <Subtitle className='!text-neutral-50 !text-base'>
                  {title}
                </Subtitle>
              </div>
              <DialogClose className='!mt-0'>
                <CardCloseButton />
              </DialogClose>
            </PageHeader>
            {body}
          </Card>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
