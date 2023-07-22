import DateInput from '@/test/components/form/DateInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Demo/Date Input',
	component: DateInput,
	tags: ['autodocs'],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
	args: { name: 'date_begin', placeholder: 'Ngày diễn ra', label: 'Ngày diễn ra' },
};

export const Row: Story = {
	args: { name: 'date_begin', placeholder: 'Ngày diễn ra', label: 'Ngày diễn ra', row: true },
};

export const Required: Story = {
	args: { name: 'date_begin', placeholder: 'Ngày diễn ra', label: 'Ngày diễn ra', required: true },
};

export const Error: Story = {
	args: {
		name: 'date_begin',
		placeholder: 'Ngày diễn ra',
		label: 'Ngày diễn ra',
		required: true,
		error: true,
	},
};
