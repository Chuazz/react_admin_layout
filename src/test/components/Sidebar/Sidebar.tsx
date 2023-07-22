import { Layout } from '@/components/Layout';
import SidebarItem from '@/interface/SidebarItem';
import Brand from '@/interface/Brand';
import { SideBar as SidebarTest } from '@/components/Layout/components/Sidebar';

interface SidebarProps {
   /**
    * class name for sidebar
    */
   className?: string;
   /**
    * un array item
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
const SideBar = ({ className = 'container', items, brand }: SidebarProps) => {
   return (
      <Layout>
         <SidebarTest className={className} items={items} brand={brand} />
      </Layout>
   );
};

export default SideBar;
