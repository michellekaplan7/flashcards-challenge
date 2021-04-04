import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async ({ count }, { dispatch, getState }) => {
    return fetch(
      `http://jservice.io/api/categories?count=${count}`
    ).then((res) => res.json());
  }
);
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    status: null,
  },

  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getCategories.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default categorySlice.reducer;

export const selectCategoriesList = (state) => state.categories.list;
