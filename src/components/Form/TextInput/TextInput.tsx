import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { BsInputCursorText } from 'react-icons/bs';
import styles from './TextInput.module.scss';

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
	 * placeholder when nothing to show
	 */
	placeholder?: string;
	/**
	 * icon for input
	 */
	icon?: ReactNode;
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

const TextInput = ({
	id,
	name,
	label,
	placeholder,
	row = false,
	required = false,
	icon,
	error,
}: TextInputProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<label
			className={clsx(styles.container, 'form-control', {
				'flex-column': !row,
				'ali-center': row,
				error: error,
			})}
		>
			<div className={clsx('row ali-center form-label')}>
				<p className='text-medium'>{label}</p>
				{required && <div className='ml-4 pt-4 text-red'>*</div>}
			</div>

			<div className='flex-1'>
				<div className={clsx('row ali-center form-input-body', { 'mt-12': !row })}>
					{icon ? icon : <BsInputCursorText />}
					<input
						id={id}
						{...register(name)}
						placeholder={placeholder}
						className={clsx('ml-12 form-input')}
						spellCheck={false}
					/>
				</div>
				<div className='error-msg'>
					<ErrorMessage errors={errors} name={name} />
				</div>
			</div>
		</label>
	);
};

export default TextInput;
