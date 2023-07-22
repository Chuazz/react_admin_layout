import { SideBar } from '@/test/components/Sidebar';
import brand from '@/test/data/brand';
import side_bar_items from '@/test/data/side_bar_items';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Demo/Sidebar',
	component: SideBar,
	tags: ['autodocs'],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
	args: { className: 'side_bar', items: side_bar_items, brand: brand },
};
