import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import vi from 'date-fns/locale/vi';
import { ReactNode, useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';
import { BsCalendarEvent } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './DateInput.module.scss';

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
	 * is this input error
	 */
	error?: boolean;
}

const DateInput = ({
	name,
	label,
	placeholder,
	row = false,
	required = false,
	icon,
	error,
}: DateInputProps) => {
	const {
		register,
		formState: { errors },
		setValue,
	} = useFormContext();
	const [startDate, setStartDate] = useState<Date | null>(null);

	const _onChange = (date: Date) => {
		setValue(name, date);
		setStartDate(date);
	};

	useEffect(() => {
		registerLocale('vi-VN', vi);
	}, []);

	return (
		<div
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
					{icon ? icon : <BsCalendarEvent />}
					<DatePicker
						selected={startDate}
						placeholderText={placeholder}
						dateFormat='dd/MM/yyyy'
						{...register(name)}
						onChange={_onChange}
						calendarClassName={clsx('form-date')}
						className={clsx('ml-12 form-input')}
						locale='vi-VN'
						popperPlacement='bottom-start'
						todayButton='Hôm nay'
						popperModifiers={[
							{
								name: 'offset',
								options: {
									offset: [-30, 0],
								},
							},
						]}
						renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
							<div className='header row ali-center jus-between'>
								<button
									aria-label='Previous Month'
									className={'react-datepicker__navigation react-datepicker__navigation--previous'}
									onClick={decreaseMonth}
								>
									<FiChevronLeft />
								</button>
								<span className='react-datepicker__current-month text-medium text-14'>
									{monthDate.toLocaleString('vi-VN', {
										month: '2-digit',
										year: 'numeric',
									})}
								</span>
								<button
									aria-label='Next Month'
									className={'react-datepicker__navigation react-datepicker__navigation--next'}
									onClick={increaseMonth}
								>
									<FiChevronRight />
								</button>
							</div>
						)}
					/>
				</div>
				<div className='error-msg'>
					<ErrorMessage errors={errors} name={name} />
				</div>
			</div>
		</div>
	);
};

export default DateInput;
