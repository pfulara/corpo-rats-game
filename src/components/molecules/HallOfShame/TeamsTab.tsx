import PageHeader from '@/components/atoms/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TeamsTab() {
  return (
    <Card>
      <PageHeader>Ranking zespołów</PageHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-12'>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className='w-28'>
                Członkowie
              </TableHead>
              <TableHead>Lider</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </CardContent>
    </Card>
  );
}
