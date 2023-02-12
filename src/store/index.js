import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { cartReducer } from './reducers/cart';
import { allProductsReducer } from './reducers/allProductsReducer';

const rootReducer = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
	allProducts: allProductsReducer,
	product_item: productReducer,
	cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
