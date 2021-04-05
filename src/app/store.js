import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import cluesReducer from "../features/cluesSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    categories: categoryReducer,
    clues: cluesReducer,
    userInfo: userReducer,
  },
});
