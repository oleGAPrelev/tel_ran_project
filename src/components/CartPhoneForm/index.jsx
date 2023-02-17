import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './index.module.css';

export default function CartPhoneForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({ mode: 'onChange' });

	const formHandleSubmit = (data) => {
		console.log(data);
		reset();
	};
	return (
		<form
			className={s.form_container}
			id="coupon"
			onSubmit={handleSubmit(formHandleSubmit)}
		>
			<label>
				<p>Phone number</p>
				<Input
					{...register('phone', {
						required: 'Dieses Feld ist erforderlich',
						pattern: {
							value: /^[0-9\+\(\)\-\s]+$/,
							message: 'Nur Zahlen, +, -, (, ), und Leerzeichen sind erlaubt',
						},
					})}
				/>
				{errors?.phone && (
					<>
						<br />
						<span className={s.error}>
							{errors?.phone?.message || 'Fehler!'}
						</span>
					</>
				)}
			</label>

			<Button disabled={!isValid} type={'submit'}>
				Order
			</Button>
		</form>
	);
}
