import React from 'react';
import s from './index.module.css';

export default function Button({ children, type, ...props }) {
	return (
		<button className={[s.nav_button, s[type]].join(' ')} {...props}>
			{children}
		</button>
	);
}
