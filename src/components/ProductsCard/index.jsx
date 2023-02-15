import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cart';
import s from './index.module.css';

export default function ProductsCard({
	id,
	title,
	image,
	price,
	discont_price,
	description,
}) {
	const dispatch = useDispatch();

	const product_url = `/product/${id}`;

	const add_to_cart = () =>
		dispatch(
			addToCart({
				id: +id,
				title,
				image,
				price,
				discont_price,
				description,
			})
		);

	return (
		<div className={s.product_card}>
			<div>
				<Link to={product_url}>
					<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
				</Link>
				<Button onClick={add_to_cart}>Add to cart</Button>
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
