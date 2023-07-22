import { FormProvider } from '@/components/Form';
import { TextInput as TextInputTest } from '@/components/Form/TextInput';
import { ReactNode } from 'react';

interface TextInputProps {
	/**
	 * identify of input
	 */
	id: string;
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
	 * is this input error ?
	 */
	error?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const TextInput = ({
	id,
	name,
	label,
	placeholder,
	row = false,
	required = false,
	icon,
	error = false,
}: TextInputProps) => {
	return (
		<FormProvider>
			<TextInputTest
				id={id}
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

export default TextInput;
