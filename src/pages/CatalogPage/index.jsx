import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogCard from '../../components/CatalogCard';
import { load_allProducts } from '../../requests/allProducts_req';
import s from './index.module.css';

export default function CatalogPage() {
	const dispatch = useDispatch();

	const all_products = useSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(load_allProducts);
	}, [dispatch]);

	return (
		<div className={['wrapper', s.catalog_pages].join(' ')}>
			<h2>Catalog</h2>
			<div className={s.catalog}>
				{all_products.map((el) => (
					<CatalogCard key={el.id} {...el} />
				))}
			</div>
		</div>
	);
}
