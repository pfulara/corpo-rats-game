import { Button } from '@/components/ui/button';

interface IProps {
  onClick?: () => void;
}

export default function CardCloseButton({
  onClick = () => null,
}: IProps) {
  return (
    <div
      onClick={onClick}
      className='cursor-pointer w-10 flex justify-center !mt-0 pb-2 rounded-none rounded-tr-xl bg-neutral-200 shadow-none text-neutral-50 text-xl font-semibold bg-red-500 hover:bg-red-600'
    >
      x
    </div>
  );
}
