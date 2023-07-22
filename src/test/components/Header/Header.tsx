import { Layout } from '@/components/Layout';
import { Body } from '@/components/Layout/components/Body';
import { Header as HeaderTest } from '@/components/Layout/components/Header';
import { SideBar as SidebarTest } from '@/components/Layout/components/Sidebar';
import HeaderItem from '@/interface/HeaderItem';
import User from '@/interface/User';
import brand from '@/test/data/brand';
import { ReactNode } from 'react';

interface HeaderProps {
	/**
	 * class name for header
	 */
	className?: string;
	/**
	 * an array with items
	 */
	items: HeaderItem[];
	/**
	 * left navbar
	 */
	leftNavbar?: ReactNode;
	/**
	 * user info
	 */
	user?: User;
}

/**
 * Primary UI component for user interaction
 */
const Header = ({ className, items, leftNavbar, user }: HeaderProps) => {
	return (
		<Layout>
			<SidebarTest className='fade-bg' items={items} brand={brand} />

			<Body>
				<HeaderTest className={className} items={items} leftNavbar={leftNavbar} user={user} />
			</Body>
		</Layout>
	);
};

export default Header;
