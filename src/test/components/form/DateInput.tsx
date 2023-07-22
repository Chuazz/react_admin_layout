import { FormProvider } from '@/components/Form';
import { DateInput as DateInputTest } from '@/components/Form/DateInput';
import { ReactNode } from 'react';

interface DateInputProps {
	/**
	 * name for input
	 */
	name: string;
	/**
	 * label of input
	 */
	label?: string;
	/**
	 * icon for input
	 */
	icon?: ReactNode;
	/**
	 * label and input same row or not
	 */
	placeholder?: string;
	/**
	 * label and input same row or not
	 */
	row?: boolean;
	/**
	 * is this input required
	 */
	required?: boolean;
	/**
	 * is this input error
	 */
	error?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const DateInput = ({
	name,
	label,
	placeholder,
	row = false,
	required = false,
	icon,
	error = false,
}: DateInputProps) => {
	return (
		<FormProvider>
			<DateInputTest
				name={name}
				label={label}
				placeholder={placeholder}
				row={row}
				required={required}
				icon={icon}
				error={error}
			/>
		</FormProvider>
	);
};

export default DateInput;
