import React from 'react';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import flowers from './media/flowers_stock.png';

export default function Sale() {
	return (
		<section className={s.sale_container}>
			<div className={['wrapper', s.sale_block].join(' ')}>
				<div className={s.h_button_block}>
					<h2>
						Sale <span className={s.accent}>New season</span>
					</h2>
					<Link to="/catalog">
						<Button type="sale_btn_white_mode">Sale</Button>
					</Link>
					<Button type="sale_btn_white_mode">Learn more</Button>
				</div>
				<img src={flowers} alt="flowers" />
			</div>
		</section>
	);
}
