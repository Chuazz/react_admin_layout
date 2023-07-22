import SidebarItem from './SidebarItem';

interface User {
	name: string;
	image: string;
	to?: string;
	menu?: SidebarItem[];
}

export default User;
