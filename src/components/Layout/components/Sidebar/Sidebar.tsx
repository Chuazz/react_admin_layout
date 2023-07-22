import clsx from 'clsx';
import styles from './Sidebar.module.scss';
import SidebarItem from '@/interface/SidebarItem';
import { BiRadioCircle } from 'react-icons/bi';
import { FiChevronRight } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Brand from '@/interface/Brand';

interface SidebarProps {
	/**
	 * class name for sidebar
	 */
	className?: string;
	/**
	 * an array with items
	 */
	items: SidebarItem[];
	/**
	 * brand info
	 */
	brand: Brand;
}

/**
 * Primary UI component for user interaction
 */
const SideBar = ({ className, items, brand }: SidebarProps) => {
	const [collapse, setCollapse] = useState<any>({});
	const [active_child, setActiveChild] = useState(items[0].chid ? items[0].chid[0].id : undefined);
	const grow_up = {
		initial: { height: 0, opacity: 0 },
		animate: { height: 'auto', opacity: 1 },
		exit: { height: 0, opacity: 0 },
	};

	const onItemClick = (item: SidebarItem) => {
		setCollapse({
			...collapse,
			[item.id]: !collapse[item.id],
		});
	};

	const _renderItem = (item: SidebarItem, i: number, child_check: boolean) => {
		let Tag = item.to ? motion.a : motion.div;
		let check = child_check && collapse[item.id];

		return (
			<motion.div key={i} className='mb-8 relative'>
				<AnimatePresence>
					{check && (
						<motion.div
							{...grow_up}
							animate={{ height: '100%', opacity: 1 }}
							transition={{ delay: 0.18 }}
							className={clsx(styles.item_border)}
						></motion.div>
					)}
				</AnimatePresence>

				<Tag
					href={item.to}
					className={clsx(styles.item, 'row ali-center jus-between pt-12 pl-24 pr-24 pointer', {
						[styles.active]: collapse[item.id],
					})}
					animate={{ paddingBottom: check ? 12 : 0 }}
					onClick={() => onItemClick(item)}
				>
					<div className='row ali-center flex-1'>
						<i className={clsx(styles.icon)}>{item.icon || <BiRadioCircle />}</i>
						<p className='flex-1'>{item.name}</p>
					</div>

					{child_check && (
						<motion.i
							className={clsx(styles.icon, 'jus-end m-0')}
							animate={{
								rotate: collapse[item.id] ? 90 : 0,
							}}
						>
							{<FiChevronRight />}
						</motion.i>
					)}
				</Tag>

				<AnimatePresence>
					{collapse[item.id] && (
						<motion.div {...grow_up} className={styles.child}>
							{item.chid?.map((child, j) => {
								Tag = child.to ? motion.a : motion.div;

								return (
									<motion.div
										key={j}
										className={clsx(
											styles.child_container,
											'row ali-center pt-8 pb-8 pl-24 pr-24 pointer',
											{ [styles.active]: child.id === active_child },
										)}
										onClick={() => setActiveChild(child.id)}
										whileTap={{
											backgroundColor: '#222d3b95',
											transition: { duration: 0.2 },
										}}
									>
										<i className={clsx(styles.icon)}>
											<BiRadioCircle />
										</i>
										<p>{child.name}</p>
									</motion.div>
								);
							})}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		);
	};

	return (
		<div className={clsx(className, styles.container, 'pb-16 relative')}>
			<motion.div className={clsx(styles.header, 'row ali-center')}>
				<motion.div
					className={clsx('row ali-center pl-12 pr-12 12 h-100 flex-1 pointer grayscale-10 ')}
					whileHover={{ filter: 'grayscale(0)' }}
				>
					<img src={brand.image} alt='' className='img-circle size-4 mr-8' />

					<p className='text-medium text-white text-17'>{brand.name}</p>
				</motion.div>
			</motion.div>

			<div className={clsx(styles.items)}>
				{items.map((item, i) => {
					const child_check = item.chid && item.chid.length > 0 ? true : false;

					return _renderItem(item, i, child_check);
				})}
			</div>
		</div>
	);
};

export default SideBar;
