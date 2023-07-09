interface SidebarChild {
	id: any;
	name: string;
	to?: string;
}

interface SidebarItem {
	id: any;
	name: string;
	to?: string;
	icon?: JSX.Element;
	chid?: SidebarChild[];
}

export default SidebarItem;
