import React from 'react';
import CouponForm from '../../components/CouponForm';
import gnome from './media/discount_img.png';
import s from './index.module.css';

export default function CouponPage() {
	return (
		<div className={['wrapper', s.coupon_pages].join(' ')}>
			<h2>Coupon</h2>
			<h3>5% off on the first order</h3>

			<div className={s.discount_block}>
				<div className={s.img_block}>
					<img src={gnome} alt="gnome" />
				</div>

				<div className={s.discount_form}>
					<CouponForm />
				</div>
			</div>
		</div>
	);
}
