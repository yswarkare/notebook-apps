import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import IngredientService from '../../services/ingredient.service';
import { CreateIngredientType, IngredientType } from '../../models/ingredient.model';

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

export const createIngredient = createAsyncThunkHOC<CreateIngredientType>(
	'ingredients/createIngredient',
	IngredientService.createIngredient
);

export const updateIngredient = createAsyncThunkHOC<IngredientType>(
	'ingredients/updateIngredient',
	IngredientService.updateIngredient
);

export const getIngredient = createAsyncThunkHOC<string>('ingredients/getIngredient', IngredientService.getIngredient);

export const deleteIngredient = createAsyncThunkHOC<string>('ingredients/deleteIngredient', IngredientService.deleteIngredient);

export const getIngredientList = createAsyncThunk('ingredients/getIngredientList', async (_, thunkApi) => {
	try {
		const response = await IngredientService.getIngredientList();
		const data = await response.data;
		return thunkApi.fulfillWithValue(data);
	} catch (error) {
		console.log(JSON.parse(error));
		const err = error as AxiosError;
		return thunkApi.rejectWithValue(err.response);
	}
});

export const getIngredientsPage = createAsyncThunk('ingredients/getIngredientsPage', async (_, thunkApi) => {
	try {
		if (thunkApi.getState().ingredients.listInfo) {
			const { itemsPerPage, pageNumber, orderBy } = thunkApi.getState().ingredients.listInfo;
			console.log({ itemsPerPage, pageNumber, orderBy });
			const response = await IngredientService.getIngredientsPage({ itemsPerPage, pageNumber, orderBy });
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
	item: object;
	list: Array<object>;
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
	item: {},
	list: [],
	listInfo: {
		totalPages: 0,
		itemsPerPage: 5,
		pageNumber: 1,
		orderBy: 'asc',
	},
	error: undefined,
};

const ingredientsSlice = createSlice({
	name: 'ingredients',
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
	},
	extraReducers: (builder) => {
		builder.addCase(getIngredientsPage.fulfilled, (state, action) => {
			state.listInfo = {
				...state.listInfo,
				totalPages: action.payload.totalPages,
				pageNumber: action.payload.pageNumber,
				itemsPerPage: action.payload.itemsPerPage,
			};
			state.list = action.payload.result;
		});
		builder.addCase(getIngredientList.fulfilled, (state, action) => {
			state.list = action.payload;
		});
		builder.addCase(getIngredient.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addCase(createIngredient.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addCase(updateIngredient.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addCase(deleteIngredient.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addMatcher(
			isAnyOf(
				createIngredient.pending,
				updateIngredient.pending,
				getIngredientList.pending,
				getIngredientsPage.pending,
				getIngredient.pending,
				deleteIngredient.pending
			),
			(state) => {
				state.loading = true;
			}
		);
		builder.addMatcher(
			isAnyOf(
				createIngredient.fulfilled,
				updateIngredient.fulfilled,
				getIngredientList.fulfilled,
				getIngredientsPage.fulfilled,
				getIngredient.fulfilled,
				deleteIngredient.fulfilled
			),
			(state) => {
				state.loading = false;
			}
		);
		builder.addMatcher(
			isAnyOf(
				createIngredient.rejected,
				updateIngredient.rejected,
				getIngredientList.rejected,
				getIngredientsPage.rejected,
				getIngredient.rejected,
				deleteIngredient.rejected
			),
			(state, action) => {
				console.log('action.payload ', action.payload);
				state.error = action.payload;
				state.loading = false;
			}
		);
	},
});

export const { setLoading, setPageNumber, setItemsPerPage, setOrderBy } = ingredientsSlice.actions;
export const ingredientsReducer = ingredientsSlice.reducer;
