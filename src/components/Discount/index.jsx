import React from 'react';
import SalePhoneForm from '../SalePhoneForm';
import s from './index.module.css';
import gnome from './media/discount_img.png';

export default function Discount() {
	return (
		<div className={s.discount_container}>
			<div className={['wrapper', s.discount_block].join(' ')}>
				<div className={s.img_block}>
					<img src={gnome} alt="gnome" />
				</div>

				<div className={s.discount_form}>
					<h2>
						5% off
						<span className={s.accent}>on the first order</span>
					</h2>

					<SalePhoneForm />
				</div>
			</div>
		</div>
	);
}
