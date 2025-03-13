import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import RecipeService from '../../services/recipe.service';
import { CreateRecipeType, RecipeType } from '../../models/recipes.model';

function createAsyncThunkHOC<D>(actionName: string, apiFunc: (data: D) => Promise<AxiosResponse<any, any>>) {
	return createAsyncThunk(actionName, async (data: D, thunkApi) => {
		try {
			const response = await apiFunc(data);
			console.log({ response });
			const res = await response.data;
			return thunkApi.fulfillWithValue(res);
		} catch (error) {
			console.log(JSON.parse(error));
			const err = error as AxiosError;
			return thunkApi.rejectWithValue(err.response);
		}
	});
}

export const createRecipe = createAsyncThunkHOC<CreateRecipeType>('recipes/createRecipe', RecipeService.createRecipe);

export const updateRecipe = createAsyncThunkHOC<RecipeType>('recipes/updateRecipe', RecipeService.updateRecipe);

export const getRecipe = createAsyncThunkHOC<string>('recipes/getRecipe', RecipeService.getRecipe);

export const getRecipeByName = createAsyncThunkHOC<string>('recipes/getRecipeByName', RecipeService.getRecipeByName);

export const deleteRecipe = createAsyncThunkHOC<string>('recipes/deleteRecipe', RecipeService.deleteRecipe);

export const getRecipeList = createAsyncThunk('recipes/getRecipeList', async (_, thunkApi) => {
	try {
		const response = await RecipeService.getRecipeList();
		const data = await response.data;
		return thunkApi.fulfillWithValue(data);
	} catch (error) {
		console.log(JSON.parse(error));
		const err = error as AxiosError;
		return thunkApi.rejectWithValue(err.response);
	}
});

export const getRecipesPage = createAsyncThunk('recipes/getRecipesPage', async (_, thunkApi) => {
	try {
		if (thunkApi.getState().recipes.listInfo) {
			const productId = thunkApi.getState().products.pageInfo.productId;
			const { itemsPerPage, pageNumber, orderBy } = thunkApi.getState().recipes.listInfo;
			console.log({ itemsPerPage, pageNumber, orderBy });
			const response = await RecipeService.getRecipesPage({ productId, itemsPerPage, pageNumber, orderBy });
			const res = await response.data;
			return thunkApi.fulfillWithValue(res);
		}
	} catch (error) {
		console.log(JSON.parse(error));
		const err = error as AxiosError;
		return thunkApi.rejectWithValue(err.response);
	}
});

type StateType = {
	loading: boolean;
	recipe: object;
	list: Array<object>;
	pageInfo: {
		recipeId: string;
	};
	listInfo: {
		totalPages: number;
		itemsPerPage: number;
		pageNumber: number;
		orderBy: 'asc' | 'desc';
	};
	error: AxiosError | undefined;
};

const initialState: StateType = {
	loading: false,
	recipe: {},
	list: [],
	pageInfo: {
		recipeId: '',
	},
	listInfo: {
		totalPages: 0,
		itemsPerPage: 5,
		pageNumber: 1,
		orderBy: 'asc',
	},
	error: undefined,
};

const recipesSlice = createSlice({
	name: 'recipes',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setPageNumber: (state, action) => {
			state.listInfo.pageNumber = action.payload;
		},
		setOrderBy: (state, action) => {
			state.listInfo.orderBy = action.payload;
		},
		setItemsPerPage: (state, action) => {
			state.listInfo.itemsPerPage = action.payload;
		},
		setRecipeId: (state, action) => {
			state.pageInfo.recipeId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getRecipesPage.fulfilled, (state, action) => {
			state.listInfo = {
				...state.listInfo,
				totalPages: action.payload.totalPages,
				pageNumber: action.payload.pageNumber,
				itemsPerPage: action.payload.itemsPerPage,
			};
			state.list = action.payload.result;
		});
		builder.addCase(getRecipeList.fulfilled, (state, action) => {
			state.list = action.payload;
		});
		builder.addCase(getRecipe.fulfilled, (state, action) => {
			state.recipe = action.payload;
		});
		builder.addCase(getRecipeByName.fulfilled, (state, action) => {
			state.recipe = action.payload;
		});
		builder.addCase(createRecipe.fulfilled, (state, action) => {
			state.recipe = action.payload;
		});
		builder.addCase(updateRecipe.fulfilled, (state, action) => {
			state.recipe = action.payload;
		});
		builder.addCase(deleteRecipe.fulfilled, (state, action) => {
			state.recipe = action.payload;
		});
		builder.addMatcher(
			isAnyOf(
				createRecipe.pending,
				updateRecipe.pending,
				getRecipeList.pending,
				getRecipesPage.pending,
				getRecipe.pending,
				getRecipeByName.pending,
				deleteRecipe.pending
			),
			(state) => {
				state.loading = true;
			}
		);
		builder.addMatcher(
			isAnyOf(
				createRecipe.fulfilled,
				updateRecipe.fulfilled,
				getRecipeList.fulfilled,
				getRecipesPage.fulfilled,
				getRecipe.fulfilled,
				getRecipeByName.fulfilled,
				deleteRecipe.fulfilled
			),
			(state) => {
				state.loading = false;
			}
		);
		builder.addMatcher(
			isAnyOf(
				createRecipe.rejected,
				updateRecipe.rejected,
				getRecipeList.rejected,
				getRecipesPage.rejected,
				getRecipe.rejected,
				getRecipeByName.rejected,
				deleteRecipe.rejected
			),
			(state, action) => {
				console.log('action.payload ', action.payload);
				state.error = action.payload;
				state.loading = false;
			}
		);
	},
});

export const { setLoading, setPageNumber, setItemsPerPage, setOrderBy, setRecipeId } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
