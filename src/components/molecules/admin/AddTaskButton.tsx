import TaskForm from '@/components/organisms/admin/TaskForm';
import Modal from '../Modal';

export default function AddTaskButton() {
  return (
    <Modal title='Dodaj nowy task' body={<TaskForm />}>
      <div className='bg-neutral-600 text-neutral-50 flex items-center justify-center absolute bottom-4 right-4 rounded-full w-8 h-8 font-semibold text-xl'>
        +
      </div>
    </Modal>
  );
}
