'use client';
import { adminDeleteEncounter } from '@/actions';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function DeleteEncounterButton({
  encounterId,
}: {
  encounterId: string;
}) {
  const handleEncounterTask = async () => {
    await adminDeleteEncounter(encounterId);
  };
  return (
    <FaRegTrashAlt
      className='cursor-pointer'
      onClick={() => handleEncounterTask()}
    />
  );
}
