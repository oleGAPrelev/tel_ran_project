import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementCount, incrementCount } from '../../store/reducers/cart';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function CartCard({
	id,
	title,
	image,
	price,
	discont_price,
	description,
}) {
	const dispatch = useDispatch();

	const increment = () => dispatch(incrementCount(id));

	const decrement = () => dispatch(decrementCount(id));
	return (
		<div className={s.card}>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			<p>{description}</p>
			<p>{price} $</p>
			<p>{discont_price}</p>
			<div className={s.triggers}>
				<Button onClick={increment}>+</Button>
				<Button onClick={decrement}>-</Button>
			</div>
		</div>
	);
}
