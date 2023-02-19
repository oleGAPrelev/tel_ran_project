import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCard from '../../components/CartCard';
import CartPhoneForm from '../../components/CartPhoneForm';

import { clearCart } from '../../store/reducers/cart';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function CardPage() {
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const clear_cart = () => dispatch(clearCart());

	const total = Math.round(
		cart.reduce((prev, { price, count }) => prev + price * count, 0)
	);

	return (
		<div className={['wrapper', s.cart_page].join(' ')}>
			<h2>Shopping cart</h2>
			{cart.length === 0 ? (
				<p>The cart is empty...</p>
			) : (
				<div className={s.cart_block}>
					<div>
						<div className={s.cart_header}>
							<nav className={s.breadcrumbs}>
								<ul className={s.breadcrumbs_list} reset-list>
									<li>
										<Link to="/">Home /</Link>
									</li>
									<li>Cart</li>
								</ul>
							</nav>
							<Link to="/categories" className={s.cart_back_link}>
								Back to the store &gt;
							</Link>
						</div>

						{cart.map((el) => (
							<CartCard key={el.id} {...el} />
						))}
					</div>

					<div className={s.total_block}>
						<h3>Order details</h3>
						<p className={s.total}>
							Total:
							<span>
								{total}
								<span>$</span>
							</span>
						</p>
						<div className={s.total_form}>
							<CartPhoneForm />
						</div>
					</div>
				</div>
			)}
			<div className={s.cart_button}>
				<Button onClick={clear_cart}>Clear cart</Button>
			</div>
		</div>
	);
}
