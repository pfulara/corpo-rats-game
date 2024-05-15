'use server';
import fetch from '@/lib/fetch';
import { encounterType } from '@/types/types';
import { revalidateTag } from 'next/cache';

export const getAdminUsers = async () => {
  const res = await fetch('/admin/users', {
    cache: 'no-cache',
  });

  const data = await res.json();

  return data;
};

export const getAdminTasks = async () => {
  const res = await fetch('/admin/tasks', {
    cache: 'no-cache',
    next: {
      tags: ['adminTasks'],
    },
  });

  const data = await res.json();

  return data;
};

export const adminDeleteTask = async (taskId: string) => {
  const res = await fetch('/admin/delete-task', {
    method: 'POST',
    body: JSON.stringify({ taskId }),
  });

  if (res.ok) {
    revalidateTag('adminTasks');
  }
};

// Encounters List
export const adminEncountersList = async () => {
  const res = await fetch('/admin/encounters', {
    cache: 'no-cache',
    next: {
      tags: ['adminEncounters'],
    },
  });

  const data = await res.json();

  return data;
};

// Delete Encounter
export const adminDeleteEncounter = async (
  encounterId: string
) => {
  const res = await fetch('/admin/delete-encounter', {
    method: 'POST',
    body: JSON.stringify({ encounterId }),
  });

  if (res.ok) {
    revalidateTag('adminEncounters');
  }
};

// Add Encounter
export const adminAddEncounter = async (
  encounter: encounterType
) => {
  const res = await fetch('/admin/add-encounter', {
    method: 'POST',
    body: JSON.stringify({ encounter }),
  });

  const data = await res.json();

  return data;
};

// Edit Encounter
export const adminEditEncounter = async (
  encounter: encounterType
) => {
  const res = await fetch('/admin/edit-encounter', {
    method: 'POST',
    body: JSON.stringify({ encounter }),
  });

  const data = await res.json();

  return data;
};
