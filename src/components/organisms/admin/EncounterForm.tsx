'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  adminAddEncounter,
  adminEditEncounter,
} from '@/actions';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { encounterType } from '@/types/types';
import EncounterAvatar from './EncounterAvatar';

export const formSchema = z.object({
  _id: z.string(),
  name: z.string().min(2),
  stats: z.object({
    multipler: z.string(),
    brainHealth: z.string(),
    logic: z.string(),
    stressResistance: z.string(),
    luck: z.string(),
  }),
  avatar: z.object({
    sex: z.string(),
    faceColor: z.string(),
    hairStyle: z.enum([
      'thick',
      'mohawk',
      'womanLong',
      'womanShort',
      'normal',
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
    hatStyle: z.string(),
    earSize: z.string(),
    shirtStyle: z.string(),
    shirtColor: z.string(),
    bgColor: z.string(),
  }),
});

export default function EncounterForm({
  encounter,
}: {
  encounter?: encounterType;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: encounter?._id || '',
      name: encounter?.name || '',
      stats: {
        multipler: `${encounter?.stats.multipler || 1}`,
        brainHealth: `${
          encounter?.stats.brainHealth || 10
        }`,
        logic: `${encounter?.stats.logic || 10}`,
        stressResistance: `${
          encounter?.stats.stressResistance || 10
        }`,
        luck: `${encounter?.stats.luck || 10}`,
      },
      avatar: {
        sex: 'man',
        faceColor:
          encounter?.avatar?.faceColor || '#F9C9B6',
        hairStyle: encounter?.avatar?.hairStyle || 'normal',
        hairColor: encounter?.avatar?.hairColor || '#000',
        eyeStyle: encounter?.avatar?.eyeStyle || 'circle',
        noseStyle: encounter?.avatar?.noseStyle || 'short',
        mouthStyle:
          encounter?.avatar?.mouthStyle || 'peace',
        glassesStyle:
          encounter?.avatar?.glassesStyle || 'none',
        hatStyle: 'none',
        earSize: 'small',
        shirtStyle: 'polo',
        shirtColor: '#fff',
        bgColor: '#93c5fd',
      },
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    if (!values._id) {
      const res = await adminAddEncounter(values);

      if (!res.error) {
        window.location.reload();
      }
    } else {
      const res = await adminEditEncounter(values);

      if (!res.error) {
        window.location.reload();
      }
    }
  };

  return (
    <CardContent>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-4 w-full'
        >
          <div>
            <EncounterAvatar form={form} />
          </div>
          <div className='flex flex-col justify-end'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center mb-2'>
                  <FormLabel>Nazwa:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name='stats.multipler'
              control={form.control}
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center mb-2'>
                  <FormLabel>Multipler:</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      step={0.1}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name='stats.brainHealth'
              control={form.control}
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center mb-2'>
                  <FormLabel>Brain health:</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name='stats.logic'
              control={form.control}
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center mb-2'>
                  <FormLabel>Logic:</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name='stats.stressResistance'
              control={form.control}
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center mb-2'>
                  <FormLabel>Stress resistance:</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name='stats.luck'
              control={form.control}
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center mb-2'>
                  <FormLabel>Luck:</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='h-10 mb-1' />
          </div>
          <div />
          <div className='text-right mt-4'>
            <Button>Zapisz</Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
}
