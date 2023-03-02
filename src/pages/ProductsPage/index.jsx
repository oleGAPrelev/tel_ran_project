import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsCard from '../../components/ProductsCard';
import { load_products } from '../../requests/products_req';
import {
	searchPrice,
	sortProducts,
} from '../../store/reducers/productsReducer';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function ProductsPage() {
	const dispatch = useDispatch();

	const { id } = useParams();
	const products = useSelector((state) => state.products);
	const categories = useSelector((state) => state.categories);

	console.log(products);

	useEffect(() => {
		dispatch(load_products(id));
	}, [dispatch, id]);

	const sort_products = (event) => dispatch(sortProducts(event.target.value));

	const search = (event) => {
		event.preventDefault();
		const { min, max } = event.target;
		const min_value = min.value || 0;
		const max_value = max.value || Infinity;
		dispatch(searchPrice({ min_value, max_value }));
	};

	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className={['wrapper', s.products_pages].join(' ')}>
			<div>
				{categories.map((el) => (
					<h2>{el.id === +id ? el.title : ''} </h2>
				))}
			</div>

			<div className={s.sorting}>
				<div className={s.price_form}>
					<form onSubmit={search}>
						<span>Price</span>
						<input type="number" placeholder="from" name="min" />
						<input type="number" placeholder="to" name="max" />
						<Button>Search</Button>
					</form>
				</div>

				<div className={s.checkbox_block}>
					<form>
						<span>Discounted items</span>
						<input
							type="checkbox"
							id="discountedItems"
							name="discountedItems"
							checked={isChecked}
							onChange={handleOnChange}
						/>
					</form>
				</div>

				<div className={s.sort_block}>
					<form>
						<span>Sorted</span>
						<select className={s.sort_select} onInput={sort_products}>
							<option value="default">by default</option>
							<option value="title">by title</option>
							<option value="price">by price</option>
						</select>
					</form>
				</div>
			</div>

			<div className={s.products}>
				{products.length &&
					products
						.filter((el) =>
							el.price === el.discont_price ? !isChecked : products
						)
						.filter((el) => !el.hide)
						.map((el) => <ProductsCard key={el.id} {...el} />)}
			</div>
		</div>
	);
}
