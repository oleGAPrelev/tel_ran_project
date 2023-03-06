import { loadCategories } from '../store/reducers/categoriesReducer';

export const load_categories = (dispatch) => {
	fetch('https://gartenbackend.onrender.com/categories/all')
		.then((resp) => resp.json())
		.then((json) => dispatch(loadCategories(json)));
};
