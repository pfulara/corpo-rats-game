'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Cookies } from 'react-cookie';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
import { useToast } from '@/components/ui/use-toast';
import { signIn } from '@/actions';

const cookie = new Cookies();

interface IProps {
  loginFormTranslations: {
    wrongEmail: string;
    emptyPassword: string;
    signIn: string;
    password: string;
  };
}

export default function LoginForm({
  loginFormTranslations,
}: IProps) {
  const formSchema = z.object({
    email: z
      .string()
      .email({ message: loginFormTranslations.wrongEmail }),
    password: z.string().min(1, {
      message: loginFormTranslations.emptyPassword,
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
    const res = await signIn(values);

    if (!res.error) {
      cookie.set('jwt', res.jwt, {
        maxAge: 60 * 60 * 24,
      });
      router.push(`/${lang}/dashboard`);
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
                {loginFormTranslations.password}:{' '}
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
            {loginFormTranslations.signIn}
          </Button>
        </div>
      </form>
    </Form>
  );
}
