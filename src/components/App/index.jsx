import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../../pages/CartPage';
import CatalogPage from '../../pages/CatalogPage';
import CategoriesPages from '../../pages/CategoriesPages';
import CouponPage from '../../pages/CouponPage';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductDescrPage from '../../pages/ProductDescrPage';
import ProductsPage from '../../pages/ProductsPage';
import SalePage from '../../pages/SalePage';
import { localStoreCard } from '../../store/reducers/cart';
import Layout from '../Layout';

function App() {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		const cartLocal = JSON.parse(localStorage.getItem('cart'));
		if (cartLocal && cartLocal.length) dispatch(localStoreCard(cartLocal));
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="categories" element={<CategoriesPages />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="categories/:id" element={<ProductsPage />} />
					<Route path="/product/:id" element={<ProductDescrPage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/sale" element={<SalePage />} />
					<Route path="/coupon" element={<CouponPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
