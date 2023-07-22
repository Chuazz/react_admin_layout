import { Header } from '@/test/components/Header';
import header_items from '@/test/data/header_items';
import user_action from '@/test/data/user';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Demo/Header',
	component: Header,
	tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
	args: { className: 'header', items: header_items, user: user_action },
};
