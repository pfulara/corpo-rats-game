'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendMessage } from '@/actions';
import { useToast } from '@/components/ui/use-toast';

export default function EmployeeSendMessageForm({
  recipientId,
}: {
  recipientId: string;
}) {
  const { toast } = useToast();
  const t = useTranslations('inbox');
  const formSchema = z.object({
    title: z.string(),
    message: z.string().min(1, {
      message: 'message.messageRequired',
    }),
    recipient: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      message: '',
      recipient: recipientId,
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    const res = await sendMessage(values);

    if (res.error) {
      toast({
        description: res.error,
        variant: 'destructive',
      });
    } else {
      location.reload();
    }
  };

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='mb-4'>
                <FormLabel>{t('header.title')}: </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='mb-4'>
                <FormLabel>
                  {t('message.message')}:{' '}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                {form.formState.errors.message?.message && (
                  <FormDescription className='text-red-500'>
                    {t(
                      `${form.formState.errors.message?.message}`
                    )}
                  </FormDescription>
                )}
              </FormItem>
            )}
          />
          <div className='text-center md:text-right'>
            <Button>{t('message.send')}</Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
}
