import { yupResolver } from '@hookform/resolvers/yup';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormProps extends PropsWithChildren {
	validate?: object;
}

const Form = ({ children, validate = {} }: FormProps) => {
	const schema = yup
		.object({
			...validate,
		})
		.required();
	const methods = useForm({
		resolver: yupResolver(schema),
	});

	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default Form;
