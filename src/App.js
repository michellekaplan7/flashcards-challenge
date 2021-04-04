import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategoriesList,
  getCategories,
} from "./components/CategorySelection/categorySlice";

import { currentCategory } from "./components/CategorySelection/categorySlice";
import "./App.css";

import Header from "./components/Header/Header";
import CategorySelection from "./components/CategorySelection/CategorySelection";
import CardsContainer from "./components/CardsContainer/CardsContainer";

const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesList);
  const selected = useSelector(currentCategory);

  // future could add loading state
  // const categoriesStatus = useSelector((state) => state.categories.status);

  useEffect(() => {
    dispatch(getCategories({ count: 3 }));
  }, [dispatch]);

  return (
    <>
      <Header />
      <div>
        {!selected ? (
          <CategorySelection categories={categories} />
        ) : (
          <CardsContainer />
        )}
      </div>
    </>
  );
};

export default App;
