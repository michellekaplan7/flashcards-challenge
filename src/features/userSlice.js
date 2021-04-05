import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    correctAnswers: null,
    incorrectAnswers: [],
  },
  reducers: {
    userSelectCorrectAnswer(state, action) {
      state.correctAnswers = action.payload;
    },
  },
});

export default userSlice.reducer;

// export const selectCategoriesList = (state) => state.categories.list;

// export const currentCategory = (state) => state.categories.currentCategory;

export const { userSelectCorrectAnswer } = userSlice.actions;
