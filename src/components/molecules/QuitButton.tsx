'use client';
import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '../ui/button';
import CardCloseButton from '../atoms/CardCloseButton';

interface IProps {
  alert: {
    boss: string;
    message: string;
  };
}

export default function QuitButton({
  alert: { boss, message },
}: IProps) {
  const { toast } = useToast();
  return (
    <CardCloseButton
      onClick={() =>
        toast({
          title: `From: ${boss}`,
          description: message,
        })
      }
    />
  );
}
