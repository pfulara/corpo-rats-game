'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Cookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signUp } from '@/actions';
import { useToast } from '@/components/ui/use-toast';

const cookie = new Cookies();

interface IProps {
  registerFormTranslations: {
    wrongEmail: string;
    emptyPassword: string;
    signUp: string;
    password: string;
    username: string;
  };
}

export default function RegisterForm({
  registerFormTranslations,
}: IProps) {
  const formSchema = z.object({
    email: z.string().email({
      message: registerFormTranslations.wrongEmail,
    }),
    password: z.string().min(1, {
      message: registerFormTranslations.emptyPassword,
    }),
  });

  const { toast } = useToast();
  const router = useRouter();
  const lang = useLocale();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    const res = await signUp(values);

    if (!res.error) {
      await cookie.set('jwt', res.jwt, {
        maxAge: 60 * 60 * 24,
      });
      await router.push(`/${lang}/dashboard`);
    } else {
      toast({
        description: res.error,
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email: </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {form.formState.errors.email?.message && (
                <FormDescription className='text-red-500'>
                  {form.formState.errors.email?.message}
                </FormDescription>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {registerFormTranslations.password}:{' '}
              </FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              {form.formState.errors.password?.message && (
                <FormDescription className='text-red-500'>
                  {form.formState.errors.password?.message}
                </FormDescription>
              )}
            </FormItem>
          )}
        />
        <div className='flex justify-center'>
          <Button className='mt-8 '>
            {registerFormTranslations.signUp}
          </Button>
        </div>
      </form>
    </Form>
  );
}
