import SidebarItem from '@/interface/SidebarItem';
import { SlMenu, SlPeople } from 'react-icons/sl';
import { FiHome } from 'react-icons/fi';

const side_bar_items: SidebarItem[] = [
   {
      id: 'home',
      name: 'Thống kê',
      icon: <FiHome />,
      to: 'http://localhost:6006/?path=/story/demo-sidebar--index&globals=backgrounds.value:transparent',
   },
   {
      id: 'manage',
      name: 'Quản lý danh sách',
      icon: <SlMenu />,
      chid: [
         { id: 'student', name: 'Sinh viên' },
         { id: 'teacher', name: 'Giảng viên' },
      ],
   },
   {
      id: 'council',
      name: 'Hội đồng',
      icon: <SlPeople />,
      chid: [
         { id: 'student', name: 'Sinh viên' },
         { id: 'teacher', name: 'Giảng viên' },
      ],
   },
];

export default side_bar_items;
