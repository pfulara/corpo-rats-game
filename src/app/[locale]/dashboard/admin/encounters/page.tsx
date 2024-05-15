import { adminEncountersList } from '@/actions';
import PageHeader from '@/components/atoms/PageHeader';
import Modal from '@/components/molecules/Modal';
import AddEncounterButton from '@/components/molecules/admin/AddEncounterButton';
import DeleteEncounterButton from '@/components/molecules/admin/DeleteEncounterButton';
import EncounterForm from '@/components/organisms/admin/EncounterForm';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { encounterType } from '@/types/types';

export default async function AdminEncounters() {
  const { encounters } = await adminEncountersList();
  return (
    <Card>
      <PageHeader>Przeciwnicy</PageHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className='w-12'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {encounters.map((encounter: encounterType) => (
              <TableRow key={encounter._id}>
                <TableCell>
                  <Modal
                    title={encounter.name}
                    body={
                      <EncounterForm
                        encounter={encounter}
                      />
                    }
                  >
                    {encounter.name}
                  </Modal>
                </TableCell>
                <TableCell className='w-12'>
                  <DeleteEncounterButton
                    encounterId={encounter._id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <AddEncounterButton />
    </Card>
  );
}
