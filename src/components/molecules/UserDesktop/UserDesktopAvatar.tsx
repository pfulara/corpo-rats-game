'use client';
import Avatar, { genConfig } from 'react-nice-avatar';

export default function UserDesktopAvatar({ avatar }: any) {
  const config = genConfig(avatar);
  return (
    <Avatar
      className='w-48 md:w-60 h-48 md:h-60 m-auto border-2 border-neutral-600'
      {...config}
    />
  );
}
