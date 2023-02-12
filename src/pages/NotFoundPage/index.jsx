import React from 'react';
import s from './index.module.css';

export default function NotFoundPage() {
	return (
		<div className={['wrapper', s.not_fount].join(' ')}>
			Error 404 - page not found
		</div>
	);
}
