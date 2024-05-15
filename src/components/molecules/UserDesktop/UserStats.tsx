import { useTranslations } from 'next-intl';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Subtitle from '@/components/atoms/Subtitle';
import { Progress } from '@/components/ui/progress';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import PageHeader from '@/components/atoms/PageHeader';
import { statsType } from '@/types/types';

export default function UserStats({
  stats: {
    exp,
    level,
    brainHealth,
    pressure,
    stressResistance,
    logic,
    willpower,
    luck,
  },
}: {
  stats: statsType;
}) {
  const t = useTranslations('desktop.stats');
  return (
    <Card className='w-full shadow-md'>
      <PageHeader className='py-4 flex-row justify-between'>
        {t('stats')}
      </PageHeader>
      <CardContent className='mt-4'>
        <ul className='text-lg'>
          <li className='grid grid-cols-2 py-2'>
            <Subtitle>{t('exp')}:</Subtitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className='cursor-default'>
                  <div className='flex items-center'>
                    <Progress
                      value={(exp.current * 100) / exp.goal}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  {exp.current}/{exp.goal}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <Separator />
          <li className='grid grid-cols-2 py-2'>
            <Subtitle>{t('health')}:</Subtitle>
            <div>{level * 2 + brainHealth * 10}</div>
          </li>
          <Separator />
          <li className='grid grid-cols-2 py-2'>
            <Subtitle>{t('damage')}:</Subtitle>
            <div>
              {`${level + pressure} ~ ${
                level * 2 + pressure * 2
              }`}
            </div>
          </li>
          <Separator />
          <li className='grid grid-cols-2 py-2'>
            <Subtitle>{t('defence')}:</Subtitle>
            <div>{level + stressResistance * 2}</div>
          </li>
          <Separator />
          <li className='grid grid-cols-2 py-2'>
            <Subtitle>{t('spDamage')}:</Subtitle>
            <div>{`${level + logic} ~ ${
              level * 2 + logic * 2
            }`}</div>
          </li>
          <Separator />
          <li className='grid grid-cols-2 py-2'>
            <Subtitle>{t('spDefence')}:</Subtitle>
            <div>{level + willpower * 2}</div>
          </li>
          <Separator />
          <li className='grid grid-cols-2 py-2'>
            <Subtitle>{t('criticalRate')}:</Subtitle>
            <div>{luck * 2}</div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
