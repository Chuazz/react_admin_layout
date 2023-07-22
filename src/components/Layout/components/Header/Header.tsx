import { Icon } from '@/components/util/Icon';
import HeaderItem from '@/interface/HeaderItem';
import clsx from 'clsx';
import styles from './Header.module.scss';
import User from '@/interface/User';
import { FiChevronRight } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

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
	leftNavbar?: JSX.Element;
	/**
	 * user info
	 */
	user?: User;
}

/**
 * Primary UI component for user interaction
 */
const Header = ({ className, items, leftNavbar, user }: HeaderProps) => {
	const classNames = className ? className : '';
	return (
		<div className={clsx(styles.container, classNames, 'pr-16 pl-16')}>
			<div className={clsx('row ali-center jus-between h-100')}>
				<div className='flex-1'>{leftNavbar ? leftNavbar : 'Custom your left navbar here 😊'}</div>

				<div className='row ali-center jus-end'>
					{items.map((item, i) => (
						<div key={i}>
							<Icon badge={item.badge} data-tooltip-id={`${item.id}${i}`}>
								{item.icon}
							</Icon>

							{item.tooltip && (
								<Tooltip
									id={`${item.id}${i}`}
									className={clsx('tooltip_container')}
									openOnClick
									clickable
									place='bottom-end'
								>
									{item.tooltip}
								</Tooltip>
							)}
						</div>
					))}

					<div data-tooltip-id='user_tooltip' className={clsx(styles.user, 'row ali-center ml-16')}>
						<img src={user?.image} alt='' />
						<p className='text-medium pr-12'>{user?.name}</p>

						{user?.menu && user.menu.length > 0 && !user.to && <FiChevronRight />}
					</div>

					<Tooltip
						id='user_tooltip'
						className={clsx('tooltip_container')}
						place='bottom-end'
						openOnClick
						clickable
					>
						{user?.menu &&
							user.menu.length > 0 &&
							user.menu.map((info, i) => (
								<motion.div key={i} className={clsx(styles.user_item, 'row ali-center')}>
									{info.icon}
									<p className='pl-12'>{info.name}</p>
								</motion.div>
							))}
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default Header;
