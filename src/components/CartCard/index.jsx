import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementCount, incrementCount } from '../../store/reducers/cart';
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
		<div>
			<div className={s.card}>
				<div>
					<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
				</div>

				<div className={s.descr}>
					<p>{description}</p>
					<div className={s.triggers}>
						<button onClick={increment}>+</button>
						<button onClick={decrement}>-</button>
					</div>
				</div>

				<div className={s.price_block}>
					<p>{price} $</p>
					<p>{discont_price} $</p>
				</div>
			</div>
		</div>
	);
}
