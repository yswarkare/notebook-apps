import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import AuthService from '../../services/auth.service';

export const verifyToken = createAsyncThunk('user/verifyToken', async (_, thunkApi) => {
	try {
		const res = await AuthService.authenticateToken();
		const data = await res.data;
		console.log(data);
		if (data.success) {
			return thunkApi.fulfillWithValue(data.success);
		}
	} catch (error) {
		console.log(error);
		AuthService.logOut()({});
		const err = error as AxiosError;
		return thunkApi.rejectWithValue(err.response?.status);
	}
});

export const getUser = createAsyncThunk('user/getUser', async (_, thunkApi) => {
	try {
		const response = await AuthService.authenticateToken();
		const data = await response.data;
		return thunkApi.fulfillWithValue(data);
	} catch (error) {
		const err = error as AxiosError;
		return thunkApi.rejectWithValue(err.response?.status);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLoggedIn: false,
		loading: false,
		userInfo: {},
		errorStatus: 0,
	},
	reducers: {
		setLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(verifyToken.fulfilled, (state, action) => {
			state.isLoggedIn = action.payload;
		});
		builder.addCase(verifyToken.rejected, (state, action) => {
			state.errorStatus = action.payload as number;
		});
		builder.addCase(getUser.fulfilled, (state, action) => {
			state.userInfo = action.payload;
		});
		builder.addCase(getUser.rejected, (state, action) => {
			state.errorStatus = action.payload as number;
		});
		builder.addMatcher(isAnyOf(verifyToken.pending, getUser.pending), (state) => {
			state.loading = true;
		});
		builder.addMatcher(isAnyOf(getUser.fulfilled, getUser.rejected, verifyToken.fulfilled, verifyToken.rejected), (state) => {
			state.loading = false;
		});
	},
});

export const { setLoggedIn } = userSlice.actions;
export const userReducer = userSlice.reducer;
