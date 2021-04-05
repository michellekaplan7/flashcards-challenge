import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async ({ count }, { dispatch, getState }) => {
    let randomOffSet = Math.floor(Math.random() * 100);

    return fetch(
      `http://jservice.io/api/categories?offset=${randomOffSet}&count=${count}`
    ).then((res) => res.json());
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    status: null,
    currentCategory: null,
  },
  reducers: {
    selectCategory(state, action) {
      state.currentCategory = action.payload;
    },
    resetCategory(state, action) {
      state.list = [];
      state.status = null;
      state.currentCategory = null;
    },
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

export const currentCategory = (state) => state.categories.currentCategory;

export const { selectCategory, resetCategory } = categorySlice.actions;
