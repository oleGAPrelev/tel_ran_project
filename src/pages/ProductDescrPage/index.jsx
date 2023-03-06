import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { load_product } from '../../requests/product_item_req';
import { addToCart } from '../../store/reducers/cart';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function ProductDescrPage() {
	const dispatch = useDispatch();

	const product = useSelector((state) => state.product_item);

	const { id } = useParams();

	const add_to_cart = () =>
		dispatch(
			addToCart({ id: +id, title, image, price, discont_price, description })
		);

	useEffect(() => {
		dispatch(load_product(id));
	}, [dispatch, id]);

	const { title, image, price, discont_price, description } = product;

	return (
		<div className={['wrapper', s.product_descr].join(' ')}>
			<div>
				<h2>{title}</h2>

				<div className={s.desct_block}>
					<div>
						<img
							src={`https://gartenbackend.onrender.com/${image}`}
							alt={title}
						/>
					</div>

					<div className={s.price_block}>
						<div className={s.prices}>
							<p>
								{discont_price}
								<span>$</span>
							</p>
							<p>{price} $</p>
							<p>-{Math.round(((price - discont_price) * 100) / price)}%</p>
						</div>

						<Button onClick={add_to_cart}>To cart</Button>

						<div className={s.descr_info}>
							<div className={s.line}></div>
							<h3>Description</h3>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
