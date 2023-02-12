import React from 'react';
import s from './index.module.css';
import Categories from '../Categories';
import { useContext } from 'react';
import { Context } from '../../context';

export default function AllCatigoriesContainer() {
	const { catigories } = useContext(Context);
	return (
		<div className={['wrapper', s.all_catigories].join(' ')}>
			<h2>Категории</h2>
			<div className={s.categories_container}>
				{catigories.map((el) => (
					<Categories key={el.id} {...el} />
				))}
			</div>
		</div>
	);
}
