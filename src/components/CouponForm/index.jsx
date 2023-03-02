import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './index.module.css';

export default function CouponForm() {
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
			onSubmit={handleSubmit(formHandleSubmit)}
		>
			<label>
				<p>First name, Last name</p>
				<Input
					id="name"
					{...register('name', {
						required: 'Dieses Feld ist erforderlich',
						pattern: {
							value: /^[A-Za-z\s]+$/i,
							message: 'Nur Buchstaben sind erlaubt',
						},
					})}
				/>
				{errors?.name && (
					<>
						<br />
						<span className={s.error}>
							{errors?.name?.message || 'Fehler!'}
						</span>
					</>
				)}
			</label>

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
				Get a discount
			</Button>
		</form>
	);
}
