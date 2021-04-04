import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../components/CategorySelection/categorySlice";
import cluesReducer from "../components/CategorySelection/cluesSlice";

export default configureStore({
  reducer: {
    categories: categoryReducer,
    clues: cluesReducer,
  },
});
