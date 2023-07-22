import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Icon.module.scss';

interface IconProps extends PropsWithChildren {
	badge?: number;
	size?: number;
}

const Icon = ({ badge, size = 45, children, ...props }: IconProps) => {
	const badge_position = (size / 100) * 10;
	const child_size = size / 2 - badge_position;
	const badge_font = child_size / 2;

	return (
		<div
			className={clsx(styles.container, 'row ali-center jus-center relative')}
			style={{ width: size, height: size }}
			{...props}
		>
			<div style={{ width: child_size, height: child_size }}>{children}</div>

			{badge && (
				<span
					className={clsx(styles.badge, 'row ali-center jus-center')}
					style={{
						width: child_size,
						height: child_size,
						fontSize: badge_font,
						top: badge_position,
						right: badge_position,
					}}
				>
					{badge}
				</span>
			)}
		</div>
	);
};

export default Icon;
