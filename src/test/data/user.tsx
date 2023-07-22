import User from '@/interface/User';
import user_img from '../images/user.jpg';
import { SlSettings, SlUser, SlLogin } from 'react-icons/sl';

const user_action: User = {
	image: user_img,
	name: 'Ngô Văn Sơn',
	menu: [
		{
			id: 'setting',
			name: 'Cài đặt',
			icon: <SlSettings />,
			to: '#',
		},
		{
			id: 'profile',
			name: 'Hồ sơ',
			icon: <SlUser />,
			to: '#',
		},
		{
			id: 'logout',
			name: 'Đăng xuất',
			icon: <SlLogin />,
			to: '#',
		},
	],
};

export default user_action;
