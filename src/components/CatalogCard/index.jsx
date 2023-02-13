import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function CatalogCard({
	id,
	title,
	image,
	price,
	discont_price,
}) {
	const product_url = `/product/${id}`;

	return (
		<div className={s.product_card}>
			<div>
				<Link to={product_url}>
					<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
				</Link>
				<Button>Add to cart</Button>
			</div>

			<div className={s.prices}>
				<p>
					{discont_price}
					<span>$</span>
				</p>
				<p>{price} $</p>
				<p>-{Math.round(((price - discont_price) * 100) / price)}%</p>
			</div>

			<div className={s.proucts_title}>
				<Link to={product_url}>
					<p>{title}</p>
				</Link>
			</div>
		</div>
	);
}
