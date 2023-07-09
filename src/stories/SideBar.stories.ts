import { SideBar } from '@/test/components/Sidebar';
import side_bar_items from '@/test/data/side_bar_items';
import type { Meta, StoryObj } from '@storybook/react';
import brand_img from '../test/images/brand.jpg';

const meta = {
   title: 'Demo/Sidebar',
   component: SideBar,
   tags: ['autodocs'],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
   args: { className: 'side_bar', items: side_bar_items, brand: { name: '136 Mobile', image: brand_img } },
};
