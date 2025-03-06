import { configureStore } from '@reduxjs/toolkit';
import { themesReducer } from './slices/themes';
import { userReducer } from './slices/user';
import { ingredientsReducer } from './slices/ingredients';

const store = configureStore({
	reducer: {
		themes: themesReducer,
		user: userReducer,
		ingredients: ingredientsReducer,
	},
});

export default store;
