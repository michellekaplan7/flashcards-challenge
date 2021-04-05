import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    answers: {
      correctAnswers: [],
      incorrectAnswers: [],
    },

    bank: 0,
  },
  reducers: {
    userSelectCorrectAnswer(state, { payload }) {
      state.answers.correctAnswers.push(payload);
    },
    userSelectIncorrectAnswer(state, { payload }) {
      state.answers.incorrectAnswers.push(payload);
    },
    increaseUserBank(state, action) {
      state.bank += action.payload;
    },
    decreaseUserBank(state, action) {
      state.bank -= action.payload;
    },
    resetUser(state, action) {
      state.answers.correctAnswers = [];
      state.answers.incorrectAnswers = [];
      state.bank = 0;
    },
  },
});

export default userSlice.reducer;

export const correctAnswers = (state) => state.userInfo.answers.correctAnswers;
export const incorrectAnswers = (state) =>
  state.userInfo.answers.incorrectAnswers;
export const bankAmount = (state) => state.userInfo.bank;

export const {
  userSelectCorrectAnswer,
  userSelectIncorrectAnswer,
  increaseUserBank,
  decreaseUserBank,
  resetUser,
} = userSlice.actions;
