import React from 'react';
import s from './index.module.css';

export default function Input(props) {
	return <input className={s.input_style} {...props} />;
}
