import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaleCard from '../../components/SaleCard';
import { load_allProducts } from '../../requests/allProducts_req';
import s from './index.module.css';

export default function SalePage() {
	const dispatch = useDispatch();

	const all_products = useSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(load_allProducts);
	}, [dispatch]);

	return (
		<div className={['wrapper', s.sale_pages].join(' ')}>
			<h2>Sale</h2>
			<div className={s.sale}>
				{all_products
					.filter((el) => el.price !== el.discont_price)
					.map((el) => (
						<SaleCard key={el.id} {...el} />
					))}
			</div>
		</div>
	);
}
