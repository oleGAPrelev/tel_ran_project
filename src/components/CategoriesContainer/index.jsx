import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load_categories } from '../../requests/categories_req';
import CategoriesCard from '../CategoriesCard';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function CategoriesContainer() {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(load_categories);
	}, []);

	return (
		<section className={['wrapper', s.categories_section].join(' ')}>
			<div className={s.catigori}>
				<h2>Catalog</h2>
				<Link to="/categories">
					<Button type="all_catigories">All categories </Button>
				</Link>
			</div>
			<div className={s.category_card}>
				{categories.slice(0, -1).map((el, index) => (
					<CategoriesCard key={index} {...el} />
				))}
			</div>
		</section>
	);
}
