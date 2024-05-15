import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}
export default function Subtitle({
  children,
  className = '',
}: IProps) {
  return (
    <h2
      className={`font-bold text-lg text-neutral-600 ${className}`}
    >
      {children}
    </h2>
  );
}
