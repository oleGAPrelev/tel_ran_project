import { loadProduct } from '../store/reducers/productReducer';

export const load_product = (id) => {
	return (dispatch) => {
		fetch(`https://gartenbackend.onrender.com/products/${id}`)
			.then((resp) => resp.json())
			.then((json) => dispatch(loadProduct(json[0])));
	};
};
