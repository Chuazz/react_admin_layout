import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
	className?: string;
}

const Layout = ({ className, children, ...props }: LayoutProps) => {
	return (
		<div className="grid wide">
			<div className="row" {...props}>
				{children}
			</div>
		</div>
	);
};

export default Layout;
