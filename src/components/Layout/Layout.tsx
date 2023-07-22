import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps extends PropsWithChildren {
	className?: string;
}

const Layout = ({ className, children, ...props }: LayoutProps) => {
	return (
		<div className={clsx(styles.container, 'grid wide')} id='app_root'>
			<div className='row' {...props}>
				{children}
			</div>
		</div>
	);
};

export default Layout;
