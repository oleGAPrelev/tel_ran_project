import React from 'react';
import { useDispatch } from 'react-redux';
import {
	decrementCount,
	delProduct,
	incrementCount,
} from '../../store/reducers/cart';
import { IoIosClose } from 'react-icons/io';
import s from './index.module.css';

export default function CartCard({
	id,
	title,
	image,
	price,
	discont_price,
	count,
}) {
	const dispatch = useDispatch();

	const del_product = (id) => dispatch(delProduct(id));

	const increment = () => dispatch(incrementCount(id));

	const decrement = () => dispatch(decrementCount(id));

	return (
		<div className={s.card}>
			<IoIosClose className={s.cross_icon} onClick={() => del_product(id)} />
			<div className={s.card_images}>
				<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			</div>

			<div className={s.descr}>
				<p>{title}</p>
				<div className={s.triggers}>
					<button onClick={decrement}>-</button>
					<p>{count}</p>
					<button onClick={increment}>+</button>
				</div>
			</div>

			<div className={s.price_block}>
				<p>
					{price}
					<span>$</span>
				</p>
				<p>{discont_price}$</p>
			</div>
		</div>
	);
}
