import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategoriesList,
  getCategories,
} from "./components/CategorySelection/categorySlice";

import { clues } from "./components/CategorySelection/cluesSlice";
import "./App.css";

import Header from "./components/Header/Header";
import CategorySelection from "./components/CategorySelection/CategorySelection";
import CardsContainer from "./components/CardsContainer/CardsContainer";

const App = () => {
  const listOfClues = useSelector(clues);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesList);

  // future could add loading state
  // const categoriesStatus = useSelector((state) => state.categories.status);

  useEffect(() => {
    dispatch(getCategories({ count: 3 }));
  }, [dispatch]);

  return (
    <>
      <Header />

      <div>
        {!listOfClues.length ? (
          <CategorySelection categories={categories} />
        ) : (
          <>
            {/* <h2 className="category-header">
              Your selected category is <span>{`< ${selectedCategory} >`}</span>
            </h2> */}
            <CardsContainer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
