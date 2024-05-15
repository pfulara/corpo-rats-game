import React from 'react';

interface IProps {
  label: string;
  value: React.ReactNode;
}

export default function EmployeeCardRow({
  label,
  value,
}: IProps) {
  return (
    <div className='grid grid-cols-3 mt-1 px-3'>
      <p className='col-span-2 text-left'>{label}:</p>
      <p className='font-semibold text-right'>{value}</p>
    </div>
  );
}
