import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load_allProducts } from '../../requests/allProducts_req';
import Sales from '../Sales';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './index.module.css';

export default function SaleContainer() {
	const dispatch = useDispatch();

	const all_products = useSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(load_allProducts);
	}, [dispatch]);

	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
	};

	return (
		<div className={['wrapper', s.sale_block].join(' ')}>
			<h2>Sale</h2>
			<Slider {...settings} className={s.info_sale_block}>
				{all_products.map((el) => (
					<Sales key={el.id} {...el} />
				))}
			</Slider>
		</div>
	);
}
