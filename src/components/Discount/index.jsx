import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './index.module.css';
import gnome from './media/discount_img.png';

export default function Discount() {
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
			className={s.discount_container}
			id="coupon"
			onSubmit={handleSubmit(formHandleSubmit)}
		>
			<div className={['wrapper', s.discount_block].join(' ')}>
				<div className={s.img_block}>
					<img src={gnome} alt="gnome" />
				</div>

				<div className={s.input_button_block}>
					<h2>
						5% off
						<span className={s.accent}>on the first order</span>
					</h2>

					<label>
						<p>Telefonnummer</p>
						<Input
							{...register('phone', {
								required: 'Dieses Feld ist erforderlich',
								pattern: {
									value: /^[0-9\+\(\)\-\s]+$/,
									message:
										'Nur Zahlen, +, -, (, ), und Leerzeichen sind erlaubt',
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
				</div>
			</div>
		</form>
	);
}
