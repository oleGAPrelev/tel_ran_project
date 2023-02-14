import React, { forwardRef } from 'react';
import s from './index.module.css';

export const Input = forwardRef((props, ref) => {
	return <input {...props} ref={ref} className={s.input_style} />;
});

export default Input;
