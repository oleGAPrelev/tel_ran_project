import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function Sales({ id, title, image, price, discont_price }) {
	console.log(title);
	const product_url = `/product/${id}`;
	return (
		<div className={s.sales_card} id="stock">
			<div>
				<Link to={product_url}>
					<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
				</Link>
			</div>

			<div className={s.prices}>
				<p>{discont_price}$</p>
				<p>{price} $</p>
				<p>-{Math.round(((price - discont_price) * 100) / price)}%</p>
			</div>

			<div className={s.sales_title}>
				<Link to={product_url}>
					<p>{title}</p>
				</Link>
			</div>
		</div>
	);
}
