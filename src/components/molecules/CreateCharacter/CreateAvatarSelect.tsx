import { useTranslations } from 'next-intl';
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

interface IProps {
  form: any;
  name: string;
  options: { value: string; label: string }[];
}

export default function CreateAvatarSelect({
  form,
  name,
  options,
}: IProps) {
  const t = useTranslations('createCharacter');

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='mt-2'>
          <FormLabel>{t(`avatar.${name}`)}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {t(`avatar.${name}Types.${label}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
