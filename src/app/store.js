import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../components/CategorySelection/categorySlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
  },
});
