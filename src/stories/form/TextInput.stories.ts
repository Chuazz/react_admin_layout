import TextInputTest from '@/test/components/form/TextInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Demo/Text Input',
	component: TextInputTest,
	tags: ['autodocs'],
} satisfies Meta<typeof TextInputTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
	args: { name: 'name', id: 'name', placeholder: 'Họ và tên', label: 'Họ và tên' },
};

export const Row: Story = {
	args: { name: 'name', id: 'name', placeholder: 'Họ và tên', label: 'Họ và tên', row: true },
};

export const Required: Story = {
	args: { name: 'name', id: 'name', placeholder: 'Họ và tên', label: 'Họ và tên', required: true },
};

export const Error: Story = {
	args: {
		name: 'name',
		id: 'name',
		placeholder: 'Họ và tên',
		label: 'Họ và tên',
		required: true,
		error: true,
	},
};
