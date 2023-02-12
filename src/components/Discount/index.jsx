import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './index.module.css';
import gnome from './media/discount_img.png';

export default function Discount() {
	return (
		<div className={s.discount_container} id="coupon">
			<div className={['wrapper', s.discount_block].join(' ')}>
				<div className={s.img_block}>
					<img src={gnome} alt="gnome" />
				</div>
				<div className={s.input_button_block}>
					<h2>
						5% off
						<span className={s.accent}>on the first order</span>
					</h2>
					<Input type="tel" value="+7" />
					<Button type="discount_button">Get a discount</Button>
				</div>
			</div>
		</div>
	);
}
