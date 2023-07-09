import clsx from "clsx";
import styles from "./Sidebar.module.scss";

interface SideBarProps {
	/**
	 * Class name for sidebar
	 */
	className?: string;
}

/**
 * Primary UI component for user interaction
 */
const SideBar = ({ className = "side_bar" }: SideBarProps) => {
	return <div className={clsx("h-2", styles[className])}>HI</div>;
};

export default SideBar;
