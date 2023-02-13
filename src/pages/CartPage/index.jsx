import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../../components/CartCard';
import { clearCart } from '../../store/reducers/cart';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function CardPage() {
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const clear_cart = () => dispatch(clearCart());

	console.log(cart);

	return (
		<div className={['wrapper', s.cart_page].join(' ')}>
			<h2>Shopping cart</h2>
			{cart.length === 0 ? (
				<p>The cart is empty...</p>
			) : (
				<div>
					<div>
						{cart.map((el) => (
							<CartCard key={el.id} {...el} />
						))}
					</div>
					<div className={s.total}>
						<Button onClick={clear_cart}>Clear cart</Button>
					</div>
				</div>
			)}
		</div>
	);
}
