interface SidebarChild {
	id: any;
	name: string;
	to?: string;
}

interface SidebarItem {
	id: any;
	name: string;
	to?: string;
	icon?: React.ReactNode;
	chid?: SidebarChild[];
}

export default SidebarItem;
