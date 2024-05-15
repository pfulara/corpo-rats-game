import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainTitle({
  children,
  className,
}: IProps) {
  return (
    <h1
      className={`font-extrabold text-2xl text-neutral-600 ${className}`}
    >
      {children}
    </h1>
  );
}
