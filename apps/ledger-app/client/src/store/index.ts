import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themesReducer } from './slices/themes';
import { userReducer } from './slices/user';
import { ingredientsReducer } from './slices/ingredients';
import { productsReducer } from './slices/products';
import { recipesReducer } from './slices/recipes';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
	key: 'user-store',
	storage: storageSession,
	whiteList: ['user', 'themes'],
};

const rootReducer = combineReducers({
	themes: persistReducer(persistConfig, themesReducer),
	user: persistReducer(persistConfig, userReducer),
	ingredients: ingredientsReducer,
	products: productsReducer,
	recipes: recipesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: import.meta.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
			},
		}),
});

export const persistor = persistStore(store);
