import { createSlice } from "@reduxjs/toolkit";

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
});

export const { setLoading } = ingredientsSlice.actions;
export const ingredientsReducer = ingredientsSlice.reducer;