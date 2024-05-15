'use client';
import Avatar, { genConfig } from 'react-nice-avatar';

export default function EmployeeCardAvatar({
  avatar,
}: {
  avatar: any;
}) {
  const config = genConfig(avatar);
  return (
    <Avatar
      className='w-48 h-48 m-auto border-2 border-neutral-600'
      {...config}
    />
  );
}
