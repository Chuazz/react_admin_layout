import { VscBell, VscComment } from 'react-icons/vsc';
import HeaderItem from '@/interface/HeaderItem';

const header_items: HeaderItem[] = [
	{
		id: 'notification',
		name: 'Thông báo',
		icon: <VscBell />,
		badge: 5,
		tooltip: <div className='pl-12'>Custom your tooltip in here</div>,
	},
	{
		id: 'message',
		name: 'Tin nhắn',
		icon: <VscComment />,
	},
];

export default header_items;
