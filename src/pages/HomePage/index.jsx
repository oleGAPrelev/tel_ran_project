import React, { useState } from 'react';
import CategoriesContainer from '../../components/CategoriesContainer';
import Discount from '../../components/Discount';
import Modal from '../../components/Modal';
import Sale from '../../components/Sale';
import SaleContainer from '../../components/SaleContainer';

export default function HomePage() {
	const [modal, setModal] = useState(false);

	document.body.style.overflow = modal ? 'hidden' : 'auto';

	return (
		<div>
			<Sale setModal={setModal} />
			<Modal modal={modal} setModal={setModal} />
			<CategoriesContainer />
			<Discount />
			<SaleContainer />
		</div>
	);
}
