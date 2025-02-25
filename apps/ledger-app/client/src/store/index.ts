import { configureStore } from '@reduxjs/toolkit';
import { themesReducer } from './slices/themes';
import { userReducer } from './slices/user';

const store = configureStore({
	reducer: {
		themes: themesReducer,
		user: userReducer,
	},
});

export default store;
