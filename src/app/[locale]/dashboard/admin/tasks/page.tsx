import React from 'react';

import { getAdminTasks } from '@/actions';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/atoms/PageHeader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { taskType } from '@/types/types';
import DeleteTaskButton from '@/components/molecules/admin/DeleteTaskButton';
import AddTaskButton from '@/components/molecules/admin/AddTaskButton';

export default async function AdminTasks() {
  const { tasks } = await getAdminTasks();

  return (
    <Card>
      <PageHeader>Zadania</PageHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nazwa</TableHead>
              <TableHead>Energy</TableHead>
              <TableHead>Exp</TableHead>
              <TableHead>Money</TableHead>
              <TableHead className='w-12'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task: taskType) => (
              <TableRow key={task._id}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.energy}</TableCell>
                <TableCell>{task.reward.exp}</TableCell>
                <TableCell>{task.reward.money}</TableCell>
                <TableCell>
                  <DeleteTaskButton taskId={task._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <AddTaskButton />
    </Card>
  );
}
