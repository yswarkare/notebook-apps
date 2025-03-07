import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import ProductService from '../../services/product.service';
import { CreateProductType, ProductType } from '../../models/products.model';

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

export const createProduct = createAsyncThunkHOC<CreateProductType>(
	'products/createProduct',
	ProductService.createProduct
);

export const updateProduct = createAsyncThunkHOC<ProductType>(
	'products/updateProduct',
	ProductService.updateProduct
);

export const getProduct = createAsyncThunkHOC<string>('products/getProduct', ProductService.getProduct);

export const deleteProduct = createAsyncThunkHOC<string>('products/deleteProduct', ProductService.deleteProduct);

export const getProductList = createAsyncThunk('products/getProductList', async (_, thunkApi) => {
	try {
		const response = await ProductService.getProductList();
		const data = await response.data;
		return thunkApi.fulfillWithValue(data);
	} catch (error) {
		console.log(JSON.parse(error));
		const err = error as AxiosError;
		return thunkApi.rejectWithValue(err.response);
	}
});

export const getProductsPage = createAsyncThunk('products/getProductsPage', async (_, thunkApi) => {
	try {
		if (thunkApi.getState().products.listInfo) {
			const { itemsPerPage, pageNumber, orderBy } = thunkApi.getState().products.listInfo;
			console.log({ itemsPerPage, pageNumber, orderBy });
			const response = await ProductService.getProductsPage({ itemsPerPage, pageNumber, orderBy });
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

const productsSlice = createSlice({
	name: 'products',
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
		builder.addCase(getProductsPage.fulfilled, (state, action) => {
			state.listInfo = {
				...state.listInfo,
				totalPages: action.payload.totalPages,
				pageNumber: action.payload.pageNumber,
				itemsPerPage: action.payload.itemsPerPage,
			};
			state.list = action.payload.result;
		});
		builder.addCase(getProductList.fulfilled, (state, action) => {
			state.list = action.payload;
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addCase(createProduct.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addCase(updateProduct.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addCase(deleteProduct.fulfilled, (state, action) => {
			state.item = action.payload;
		});
		builder.addMatcher(
			isAnyOf(
				createProduct.pending,
				updateProduct.pending,
				getProductList.pending,
				getProductsPage.pending,
				getProduct.pending,
				deleteProduct.pending
			),
			(state) => {
				state.loading = true;
			}
		);
		builder.addMatcher(
			isAnyOf(
				createProduct.fulfilled,
				updateProduct.fulfilled,
				getProductList.fulfilled,
				getProductsPage.fulfilled,
				getProduct.fulfilled,
				deleteProduct.fulfilled
			),
			(state) => {
				state.loading = false;
			}
		);
		builder.addMatcher(
			isAnyOf(
				createProduct.rejected,
				updateProduct.rejected,
				getProductList.rejected,
				getProductsPage.rejected,
				getProduct.rejected,
				deleteProduct.rejected,
			),
			(state, action) => {
				console.log('action.payload ', action.payload);
				state.error = action.payload;
				state.loading = false;
			}
		);
	},
});

export const { setLoading, setPageNumber, setItemsPerPage, setOrderBy } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
