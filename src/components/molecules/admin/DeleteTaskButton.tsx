'use client';
import { adminDeleteTask } from '@/actions';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function DeleteTaskButton({
  taskId,
}: {
  taskId: string;
}) {
  const handleDeleteTask = async () => {
    await adminDeleteTask(taskId);
  };
  return (
    <FaRegTrashAlt
      className='cursor-pointer'
      onClick={() => handleDeleteTask()}
    />
  );
}
