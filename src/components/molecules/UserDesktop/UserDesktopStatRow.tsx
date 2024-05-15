import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Subtitle from '@/components/atoms/Subtitle';
import { addStat } from '@/actions';
import { useTranslations } from 'next-intl';
import AddStatButton from '@/components/molecules/AddStatButton';

interface IProps {
  label: string;
  value: number;
  visible: boolean;
}

export default function UserDesktopStatRow({
  label,
  value,
  visible,
}: IProps) {
  const t = useTranslations('desktop.employeeCard');

  return (
    <li className='grid grid-cols-12 py-2'>
      <TooltipProvider>
        <Subtitle className='col-span-6 '>
          <Tooltip>
            <TooltipTrigger className='cursor-default text-left'>
              {t(label)}:
            </TooltipTrigger>
            <TooltipContent>
              {t(`${label}Desc`)}
            </TooltipContent>
          </Tooltip>
        </Subtitle>
        <div className='col-span-5'>{value}</div>
        <div className='flex items-center'>
          {visible && <AddStatButton label={label} />}
        </div>
      </TooltipProvider>
    </li>
  );
}
