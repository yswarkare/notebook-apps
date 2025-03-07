import { configureStore } from '@reduxjs/toolkit';
import { themesReducer } from './slices/themes';
import { userReducer } from './slices/user';
import { ingredientsReducer } from './slices/ingredients';
import { productsReducer } from './slices/products';

const store = configureStore({
	reducer: {
		themes: themesReducer,
		user: userReducer,
		ingredients: ingredientsReducer,
		products: productsReducer,
	},
});

export default store;
