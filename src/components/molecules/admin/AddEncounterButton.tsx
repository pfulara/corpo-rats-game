import EncounterForm from '@/components/organisms/admin/EncounterForm';
import Modal from '../Modal';

export default function AddEncounterButton() {
  return (
    <Modal
      title='Dodaj nowego przeciwnika'
      body={<EncounterForm />}
    >
      <div className='bg-neutral-600 text-neutral-50 flex items-center justify-center absolute bottom-4 right-4 rounded-full w-8 h-8 font-semibold text-xl pb-[2px] hover:bg-neutral-800'>
        +
      </div>
    </Modal>
  );
}
