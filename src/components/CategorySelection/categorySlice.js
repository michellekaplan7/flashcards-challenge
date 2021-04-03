import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryName: null,
  },
  reducers: {
    categorySelection: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.categoryName = action.payload;
    },
  },
});

export const { categorySelection } = categorySlice.actions;

export const selectCategory = (state) => state.category.categoryName;

export default categorySlice.reducer;
