import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function Categories({ id, image, title }) {
	return (
		<label className={s.catigories}>
			<Link key={id} to={`/categories/${id}`}>
				<img src={`http://localhost:3333/${image}`} alt={title} />
				<p>{title}</p>
			</Link>
		</label>
	);
}
