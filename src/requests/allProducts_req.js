import { loadAllProducts } from '../store/reducers/allProductsReducer';

export const load_allProducts = (dispatch) => {
	fetch('https://gartenbackend.onrender.com/products/all')
		.then((resp) => resp.json())
		.then((json) => dispatch(loadAllProducts(json)));
};
