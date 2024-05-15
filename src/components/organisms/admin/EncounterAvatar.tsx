import Avatar, { genConfig } from 'react-nice-avatar';
import { z } from 'zod';
import { formSchema } from './EncounterForm';
import CreateAvatarSelect from '@/components/molecules/CreateCharacter/CreateAvatarSelect';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function EncounterAvatar({
  form,
}: {
  form: any;
}) {
  const config = genConfig({
    sex: 'man',
    faceColor: form.watch('avatar.faceColor'),
    hairStyle: form.watch('avatar.hairStyle'),
    hairColor: form.watch('avatar.hairColor'),
    eyeStyle: form.watch('avatar.eyeStyle'),
    noseStyle: form.watch('avatar.noseStyle'),
    mouthStyle: form.watch('avatar.mouthStyle'),
    glassesStyle: form.watch('avatar.glassesStyle'),
    hatStyle: 'none',
    bgColor: '#93c5fd',
    earSize: 'small',
    shirtStyle: 'polo',
    shirtColor: '#fff',
  });

  return (
    <div>
      <Avatar
        className='w-48 md:w-60 h-48 md:h-60 m-auto border-2 border-neutral-600'
        {...config}
      />
      <FormField
        name={'avatar.faceColor'}
        control={form.control}
        render={({ field }) => (
          <FormItem className='mt-2  grid grid-cols-3 items-center'>
            <FormLabel>Kolor twarzy</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl className='col-span-2'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value='#F9C9B6'>
                  Light
                </SelectItem>
                <SelectItem value='#AC6651'>
                  Dark
                </SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        name={'avatar.hairStyle'}
        control={form.control}
        render={({ field }) => (
          <FormItem className='mt-2 grid grid-cols-3 items-center'>
            <FormLabel>Włosy</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl className='col-span-2'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  { value: 'normal', label: 'normal' },
                  { value: 'thick', label: 'thick' },
                  { value: 'mohawk', label: 'mohawk' },
                  {
                    value: 'womanLong',
                    label: 'womanLong',
                  },
                  {
                    value: 'womanShort',
                    label: 'womanShort',
                  },
                ].map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        name={'avatar.hairColor'}
        control={form.control}
        render={({ field }) => (
          <FormItem className='mt-2 grid grid-cols-3 items-center'>
            <FormLabel>Kolor włosów</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl className='col-span-2'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  { value: '#000', label: 'black' },
                  { value: '#fef08a', label: 'blonde' },
                  { value: '#F48150', label: 'redhead' },
                  { value: '#FC909F', label: 'pink' },
                  { value: '#77311D', label: 'brown' },
                ].map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        name={'avatar.eyeStyle'}
        control={form.control}
        render={({ field }) => (
          <FormItem className='mt-2 grid grid-cols-3 items-center'>
            <FormLabel>Oczy</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl className='col-span-2'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  { value: 'circle', label: 'circle' },
                  { value: 'smile', label: 'smile' },
                  { value: 'oval', label: 'oval' },
                ].map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        name={'avatar.noseStyle'}
        control={form.control}
        render={({ field }) => (
          <FormItem className='mt-2 grid grid-cols-3 items-center'>
            <FormLabel>Nos</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl className='col-span-2'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  { value: 'short', label: 'short' },
                  { value: 'long', label: 'long' },
                  { value: 'round', label: 'round' },
                ].map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        name={'avatar.mouthStyle'}
        control={form.control}
        render={({ field }) => (
          <FormItem className='mt-2 grid grid-cols-3 items-center'>
            <FormLabel>Usta</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl className='col-span-2'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  { value: 'peace', label: 'peace' },
                  { value: 'smile', label: 'smile' },
                  { value: 'laugh', label: 'laugh' },
                ].map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        name={'avatar.glassesStyle'}
        control={form.control}
        render={({ field }) => (
          <FormItem className='mt-2 grid grid-cols-3 items-center'>
            <FormLabel>Okulary</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl className='col-span-2'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  { value: 'none', label: 'none' },
                  { value: 'round', label: 'round' },
                  { value: 'square', label: 'square' },
                ].map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  );
}
