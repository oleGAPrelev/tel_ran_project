import React from 'react';
import CategoriesContainer from '../../components/CategoriesContainer';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';
import SaleContainer from '../../components/SaleContainer';

export default function HomePage() {
	return (
		<div>
			<Sale />
			<CategoriesContainer />
			<Discount />
			<SaleContainer />
		</div>
	);
}
