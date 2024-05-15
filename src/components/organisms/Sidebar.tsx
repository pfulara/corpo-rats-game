import { getTranslations } from 'next-intl/server';
import { getMyUser } from '@/actions';
import { FaHome } from 'react-icons/fa';
// import { RiTeamFill } from 'react-icons/ri';
import { FaListOl } from 'react-icons/fa';
// import { TbHierarchy3 } from 'react-icons/tb';
import { IoFastFood } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaCog } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

import { Card } from '../ui/card';
import SidebarItem from '../molecules/SidebarItem';
import { Separator } from '../ui/separator';
import SidebarItemWithTimer from '../molecules/SidebarItemWithTimer';

const menu = [
  {
    slug: 'dashboard/inbox',
    label: 'messages',
    icon: <MdEmail />,
  },
  // {
  //   slug: 'dashboard/team',
  //   label: 'team',
  //   icon: <RiTeamFill />,
  // },
  // {
  //   slug: 'dashboard/canteen',
  //   label: 'canteen',
  //   icon: <IoFastFood />,
  // },
  // {
  //   slug: 'dashboard/hierarchy',
  //   label: 'hierarchy',
  //   icon: <TbHierarchy3 />,
  // },
  {
    slug: 'dashboard/ranking',
    label: 'hallOfShame',
    icon: <FaListOl />,
  },
  {
    slug: 'dashboard/settings',
    label: 'settings',
    icon: <FaCog />,
  },
];

export default async function Sidebar() {
  const {
    user: { unreadMessage, admin, task },
  } = await getMyUser();

  const t = await getTranslations('sidebar');

  return (
    <Card className='p-4 h-full flex lg:flex-col justify-between mb-4 lg:mb-0 overflow-x-scroll lg:overflow-x-auto'>
      <div className='flex gap-4 lg:flex-col'>
        <SidebarItemWithTimer
          item={{
            slug: 'dashboard',
            label: t('desktop'),
            icon: <FaHome />,
            task: task,
          }}
        />
        {menu.map((item) => (
          <SidebarItem
            key={item.slug}
            item={{
              ...item,
              alert:
                item.label === 'messages' && unreadMessage,
            }}
          />
        ))}
      </div>
      <div className='flex lg:flex-col gap-4 ml-4 lg:ml-0'>
        {/* Admin panel*/}
        {admin ? (
          <SidebarItem
            item={{
              slug: 'dashboard/admin',
              label: 'adminPanel',
              icon: <MdAdminPanelSettings />,
            }}
          />
        ) : null}
        <Separator className='hidden lg:block' />
        <SidebarItem
          item={{
            slug: 'signout',
            label: 'signout',
            icon: <FaSignOutAlt />,
          }}
        />
      </div>
    </Card>
  );
}
