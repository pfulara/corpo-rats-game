'use client';

import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { taskType } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function TaskForm({
  task,
}: {
  task?: taskType;
}) {
  const formSchema = z.object({
    _id: z.string(),
    name: z.string().min(2, 'Minimum 2 znaki'),
    encounters: z
      .object({
        _id: z.string(),
        name: z.string(),
        stats: z.object({
          multipler: z.number(),
          brainHealth: z.number(),
          pressure: z.number(),
          stressResistance: z.number(),
          logic: z.number(),
          willpower: z.number(),
          luck: z.number(),
        }),
      })
      .array(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: task?._id || '',
      name: task?.name || 'sas',
      encounters: task?.encounters || [],
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
          <Button>Save</Button>
        </form>
      </Form>
    </CardContent>
  );
}
