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

export const getClues = createAsyncThunk(
  "clues/getClues",
  async (id, { dispatch, getState }) => {
    return fetch(`http://jservice.io/api/clues?category=${id}`).then((res) =>
      res.json()
    );
  }
);
const cluesSlice = createSlice({
  name: "clues",
  initialState: {
    arrayOfPayloads: [],
    values: [200, 400, 600, 800, 1000],
    list: [
      {
        name: "category1",
        cluesList: null,
      },
      {
        name: "category2",
        cluesList: null,
      },
      {
        name: "category3",
        cluesList: null,
      },
      {
        name: "category4",
        cluesList: null,
      },
      {
        name: "category5",
        cluesList: null,
      },
    ],
    categoryStatus: null,
    cluesStatus: null,
  },
  reducers: {
    resetClues(state, action) {
      state.list = [];
      state.status = null;
    },
  },
  extraReducers: {
    //getCategories
    [getCategories.pending]: (state, action) => {
      state.categoryStatus = "loading";
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.list = payload.map((category, i) => {
        return {
          categoryNumber: i + 1,
          categoryID: category.id,
          categoryTitle: category.title,
        };
      });

      state.categoryStatus = "success";
    },
    [getCategories.rejected]: (state, action) => {
      state.categoryStatus = "failed";
    },

    //getClues
    [getClues.pending]: (state, action) => {
      state.cluesStatus = "loading";
    },
    [getClues.fulfilled]: (state, { payload }) => {
      console.log("payloadddd", payload);

      state.arrayOfPayloads.push(payload);

      state.arrayOfPayloads.forEach((payload) => {
        state.list.forEach((el) => {
          if (payload[0].category_id === el.categoryID) {
            el.cluesList = payload.slice(0, 5).map((item) => {
              return {
                id: item.id,
                answer: item.answer,
                question: item.question,
                value: item.value,
                categoryID: item.category_id,
              };
            });
          }
        });
      });

      state.cluesStatus = "success";
    },
    [getClues.rejected]: (state, action) => {
      state.cluesStatus = "failed";
    },
  },
});

export default cluesSlice.reducer;

export const cluesStatus = (state) => state.clues.cluesStatus;

export const categoryStatus = (state) => state.clues.categoryStatus;

export const { resetClues } = cluesSlice.actions;

export const cluesList = (state) => state.clues.list;

export const values = (state) => state.clues.values;
