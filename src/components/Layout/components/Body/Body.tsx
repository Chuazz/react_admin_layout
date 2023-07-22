import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface BodyProps extends PropsWithChildren {
	className?: string;
}

const Body = ({ className, children, ...props }: BodyProps) => {
	return (
		<div className={clsx(className, 'flex-1')} {...props}>
			{children}
		</div>
	);
};

export default Body;
