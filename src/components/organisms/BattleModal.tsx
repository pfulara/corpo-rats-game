import { useEffect, useRef, useState } from 'react';

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import {
  encounterType,
  statsType,
  turnType,
} from '@/types/types';
import UserDesktopAvatar from '@/components/molecules/UserDesktop/UserDesktopAvatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  battle: {
    turns: turnType[];
    player: {
      _id: string;
      username: string;
      stats: statsType;
      avatar: any;
    } | null;
    enemy: encounterType | null;
  };
}

export default function BattleModal({
  open,
  onOpenChange,
  battle,
}: IProps) {
  const t = useTranslations('desktop.tasks');
  const [turns, setTurns] = useState<turnType[]>([]);
  const [playerHp, setPlayerHp] = useState(
    battle.turns[0].playerHealth
  );
  const [enemyrHp, setEnemyHp] = useState(
    battle.turns[0].enemyHealth
  );
  const [messageIndex, setMessageIndex] = useState(0);

  const refElement = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    refElement.current?.scrollIntoView();
  }, [turns]);

  useEffect(() => {
    let timeout: any;
    if (messageIndex < battle.turns.length - 1) {
      timeout = setTimeout(
        () => setMessageIndex(messageIndex + 1),
        1000
      );
    }
    setTurns([...turns, battle.turns[messageIndex]]);
    setPlayerHp(battle.turns[messageIndex].playerHealth);
    setEnemyHp(battle.turns[messageIndex].enemyHealth);

    return () => {
      clearTimeout(timeout);
    };
  }, [battle.turns, messageIndex]);

  const Line = (
    id: string,
    attackerName: string | undefined,
    defenderName: string | undefined,
    dmg: number | null,
    crit: boolean
  ) => {
    return (
      <div ref={refElement} key={id} className='mb-2'>
        <span className='font-semibold'>
          {attackerName}
        </span>{' '}
        {t('deals')}{' '}
        <span
          className={`font-semibold ${
            crit ? 'text-red-600 text-xl' : ''
          }`}
        >
          {dmg}
        </span>{' '}
        {t('damage')}{' '}
        <span className='font-semibold'>
          {defenderName}
        </span>
        <Separator className='mt-2' />
      </div>
    );
  };

  const Result = (
    id: string,
    winner: string | undefined
  ) => {
    return (
      <div ref={refElement} key={id} className='mb-2'>
        <span className='font-semibold'>{winner}</span>{' '}
        wygrywa!
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-[1200px] w-full'>
        <div className='grid grid-cols-4'>
          <div>
            <UserDesktopAvatar
              avatar={battle.player?.avatar}
            />
            <p className='font-semibold text-2xl text-center mt-4'>
              {battle.player?.username}
            </p>
            <p className='text-center text-2xl text-red-500 font-bold'>
              {playerHp}/{battle.turns[0].playerHealth}
            </p>
          </div>
          <div className='col-span-2 overflow-y-scroll text-center border border-neutral-600 py-2 max-h-80 rounded-xl battle-scrollbar'>
            {turns.map((turn: turnType) => {
              if (
                turn.id !== 'start' &&
                turn.id !== 'end'
              ) {
                const attacker =
                  turn.move === 'player'
                    ? battle.player?.username
                    : battle.enemy?.name;
                const defender =
                  turn.move === 'enemy'
                    ? battle.player?.username
                    : battle.enemy?.name;
                return Line(
                  turn.id,
                  attacker,
                  defender,
                  turn.dmg,
                  turn.critic
                );
              }

              if (turn.id === 'end') {
                return Result(
                  turn.id,
                  turn.playerHealth > 0
                    ? battle.player?.username
                    : battle.enemy?.name
                );
              }
              return null;
            })}
          </div>
          <div>
            <div style={{ transform: 'rotateY(180deg)' }}>
              <UserDesktopAvatar
                avatar={battle.enemy?.avatar}
              />
            </div>
            <p className='font-semibold text-2xl text-center mt-4'>
              {battle.enemy?.name}
            </p>
            <p className='text-center text-2xl text-red-500 font-bold'>
              {enemyrHp}/{battle.turns[0].enemyHealth}
            </p>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <Button onClick={() => onOpenChange(false)}>
            Zamknij
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
