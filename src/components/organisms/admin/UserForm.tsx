'use client';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CardContent } from '@/components/ui/card';
import { AdminUserType } from '@/types/types';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function UserForm({
  user,
}: {
  user: AdminUserType;
}) {
  const formSchema = z.object({
    status: z.string(),
    admin: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: user.status,
      admin: `${user.admin}`,
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    console.log(values);
  };

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3 mb-2'>
            <p>Email:</p>
            <p className='col-span-2 font-semibold'>
              {user.email}
            </p>
          </div>
          <div className='grid grid-cols-3 mb-2'>
            <p>Username:</p>
            <p className='col-span-2 font-semibold'>
              {user.username}
            </p>
          </div>
          <div className='grid grid-cols-3 mb-2'>
            <p>Created:</p>
            <p className='col-span-2 font-semibold'>
              {user.createdAt}
            </p>
          </div>
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Status: </FormLabel>
                <FormControl className='col-span-2'>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue {...field} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Active'>
                        Active
                      </SelectItem>
                      <SelectItem value='Banned'>
                        Banned
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='admin'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Admin: </FormLabel>
                <FormControl className='col-span-2'>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue {...field} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={'true'}>
                        Admin
                      </SelectItem>
                      <SelectItem value={'false'}>
                        Player
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button>Save</Button>
        </form>
      </Form>
    </CardContent>
  );
}
