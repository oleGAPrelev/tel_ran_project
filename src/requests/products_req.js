import { loadProducts } from '../store/reducers/productsReducer';

export const load_products = (id) => {
	return (dispatch) => {
		fetch(`https://gartenbackend.onrender.com/categories/${id}`)
			.then((resp) => resp.json())
			.then((json) => {
				const payload = json.map((el) => ({
					...el,
					hide: false,
				}));
				dispatch(loadProducts(payload));
			});
	};
};
