import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}
export default function Title({
  children,
  className = '',
}: IProps) {
  return (
    <h2
      className={`font-extrabold text-lg text-neutral-600 ${className}`}
    >
      {children}
    </h2>
  );
}
