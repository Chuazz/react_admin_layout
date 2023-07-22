interface HeaderItem {
	id: string;
	name: string;
	icon: JSX.Element;
	to?: string;
	badge?: number;
	tooltip?: React.ReactNode
}

export default HeaderItem;
