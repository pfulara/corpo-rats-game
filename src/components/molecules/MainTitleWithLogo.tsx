import React from 'react';
import MainTitle from '../atoms/MainTitle';
import Logo from '../atoms/Logo';

interface IProps {
  className?: string;
}

export default function MainTitleWithLogo({
  className = '',
}: IProps) {
  return (
    <MainTitle
      className={`flex gap-3 items-center ${className}`}
    >
      <Logo />
      <div className='text-base leading-none'>
        Corpo
        <span className='block text-xl'>Rats</span>
      </div>
    </MainTitle>
  );
}
