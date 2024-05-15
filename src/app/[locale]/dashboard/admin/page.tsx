import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/atoms/PageHeader';
import { getAdminUsers } from '@/actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import moment from 'moment';
import Modal from '@/components/molecules/Modal';
import { AdminUserType } from '@/types/types';
import UserForm from '@/components/organisms/admin/UserForm';

export default async function AdminPage() {
  const { users } = await getAdminUsers();

  return (
    <Card>
      <PageHeader>Użytkownicy</PageHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: AdminUserType) => (
              <TableRow key={user._id}>
                <TableCell>
                  <Modal
                    title={user.email}
                    body={<UserForm user={user} />}
                  >
                    {user.email}
                  </Modal>
                </TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  {moment(user.createdAt).format(
                    'DD-MM-YYYY HH:mm'
                  )}
                </TableCell>
                <TableCell>
                  {user.admin ? 'Admin' : 'Player'}
                </TableCell>
                <TableCell>
                  <p
                    className={`${
                      user.status === 'Banned'
                        ? 'text-red-600'
                        : 'text-green-600'
                    } font-semibold`}
                  >
                    {user.status}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
