'use client';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Avatar, { genConfig } from 'react-nice-avatar';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { saveNewCharacter } from '@/actions';
import CreateAvatarSelect from './CreateAvatarSelect';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export const formSchema = z.object({
  username: z.string().min(2, {
    message: 'usernameMin2Chars',
  }),
  sex: z.enum(['man', 'woman']),
  faceColor: z.enum(['#F9C9B6', '#AC6651']),
  hairStyle: z.enum([
    'thick',
    'mohawk',
    'womanLong',
    'womanShort',
  ]),
  hairColor: z.enum([
    '#000',
    '#77311D',
    '#FC909F',
    '#fef08a',
    '#F48150',
  ]),
  eyeStyle: z.enum(['circle', 'oval', 'smile']),
  noseStyle: z.enum(['short', 'round', 'long']),
  mouthStyle: z.enum(['laugh', 'smile', 'peace']),
  glassesStyle: z.enum(['none', 'round', 'square']),
  shirtStyle: z.string(),
  shirtColor: z.string(),
  bgColor: z.string(),
  hatStyle: z.string(),
  earSize: z.string(),
});

export default function CreateCharacterForm() {
  const t = useTranslations('createCharacter');
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      sex: 'man',
      faceColor: '#F9C9B6',
      hairStyle: 'thick',
      hairColor: '#000',
      eyeStyle: 'circle',
      noseStyle: 'short',
      mouthStyle: 'peace',
      glassesStyle: 'none',
      bgColor: '#93c5fd',
      hatStyle: 'none',
      earSize: 'small',
      shirtStyle: 'polo',
      shirtColor: '#fff',
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    const res = await saveNewCharacter(values);

    if (res?.error) {
      toast({
        description: res.error,
        variant: 'destructive',
      });
    }
  };

  const config = genConfig({
    sex: 'man',
    faceColor: form.watch('faceColor'),
    hairStyle: form.watch('hairStyle'),
    hairColor: form.watch('hairColor'),
    eyeStyle: form.watch('eyeStyle'),
    noseStyle: form.watch('noseStyle'),
    mouthStyle: form.watch('mouthStyle'),
    glassesStyle: form.watch('glassesStyle'),
    bgColor: '#93c5fd',
    hatStyle: 'none',
    earSize: 'small',
    shirtStyle: 'polo',
    shirtColor: '#fff',
  });

  return (
    <>
      <Form {...form}>
        <form
          className='block md:grid grid-cols-2 md:gap-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <Avatar
              className='w-48 md:w-60 h-48 md:h-60 m-auto'
              {...config}
            />
            <FormField
              control={form.control}
              name={'username'}
              render={({ field }) => (
                <FormItem className='mt-4'>
                  <FormLabel>
                    {t(`avatar.username`)}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {form.formState.errors.username
                    ?.message && (
                    <FormDescription className='text-red-500'>
                      {
                        form.formState.errors.username
                          ?.message
                      }
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
          </div>
          <div>
            <CreateAvatarSelect
              name='faceColor'
              form={form}
              options={[
                { value: '#F9C9B6', label: 'light' },
                { value: '#AC6651', label: 'dark' },
              ]}
            />
            <CreateAvatarSelect
              name='hairStyle'
              form={form}
              options={[
                { value: 'thick', label: 'thick' },
                { value: 'mohawk', label: 'mohawk' },
                { value: 'womanLong', label: 'womanLong' },
                {
                  value: 'womanShort',
                  label: 'womanShort',
                },
              ]}
            />
            <CreateAvatarSelect
              name='hairColor'
              form={form}
              options={[
                { value: '#000', label: 'black' },
                { value: '#fef08a', label: 'blonde' },
                { value: '#F48150', label: 'redhead' },
                { value: '#FC909F', label: 'pink' },
                { value: '#77311D', label: 'brown' },
              ]}
            />
            <CreateAvatarSelect
              name='eyeStyle'
              form={form}
              options={[
                { value: 'circle', label: 'circle' },
                { value: 'smile', label: 'smile' },
                { value: 'oval', label: 'oval' },
              ]}
            />
            <CreateAvatarSelect
              name='noseStyle'
              form={form}
              options={[
                { value: 'short', label: 'short' },
                { value: 'long', label: 'long' },
                { value: 'round', label: 'round' },
              ]}
            />
            <CreateAvatarSelect
              name='mouthStyle'
              form={form}
              options={[
                { value: 'peace', label: 'peace' },
                { value: 'smile', label: 'smile' },
                { value: 'laugh', label: 'laugh' },
              ]}
            />
            <CreateAvatarSelect
              name='glassesStyle'
              form={form}
              options={[
                { value: 'none', label: 'none' },
                { value: 'round', label: 'round' },
                { value: 'square', label: 'square' },
              ]}
            />
            <div className='text-right mt-8'>
              <Button>{t('save')}</Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
