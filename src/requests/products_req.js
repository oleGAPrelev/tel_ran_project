import { loadProducts } from '../store/reducers/productsReducer';

export const load_products = (id) => {
	return (dispatch) => {
		fetch(`http://localhost:3333/categories/${id}`)
			.then((resp) => resp.json())
			.then((json) => {
				dispatch(loadProducts(json));
			});
	};
};
