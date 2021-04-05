import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getClues = createAsyncThunk(
  "clues/getClues",
  async (id, { dispatch, getState }) => {
    console.log({ id });
    return fetch(`http://jservice.io/api/clues?category=${id}`).then((res) =>
      res.json()
    );
  }
);
const cluesSlice = createSlice({
  name: "clues",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getClues.pending]: (state, action) => {
      state.status = "loading";
    },
    [getClues.fulfilled]: (state, { payload }) => {
      state.list = payload.map((clue) => {
        return {
          id: clue.id,
          answer: clue.answer,
          question: clue.question,
          value: clue.value,
          categoryID: clue.category_id,
        };
      });

      state.status = "success";
    },
    [getClues.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default cluesSlice.reducer;

export const clues = (state) => state.clues.list;

export const cluesStatus = (state) => state.clues.status;
