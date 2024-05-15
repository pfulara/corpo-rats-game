import React from 'react';
import { CardHeader } from '@/components/ui/card';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageHeader({
  children,
  className = '',
}: IProps) {
  return (
    <CardHeader
      className={`py-2 px-6 bg-neutral-600 text-neutral-50 rounded-t-xl mb-4 ${className}`}
    >
      {children}
    </CardHeader>
  );
}
