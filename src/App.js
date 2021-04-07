import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { selectCategoriesList, getCategories } from "./features/categorySlice";

import { currentCategory } from "./features/categorySlice";
import {
  cluesList,
  getCategories,
  getClues,
  cluesStatus,
  categoryStatus,
  // resetClues,
} from "./features/cluesSlice";
import "./App.css";

import Header from "./components/Header/Header";
// import CategorySelection from "./components/CategorySelection/CategorySelection";
// import CardsContainer from "./components/CardsContainer/CardsContainer";

const App = () => {
  const dispatch = useDispatch();
  // const categories = useSelector(selectCategoriesList);
  const clues = useSelector(cluesList);
  const statusOfClues = useSelector(cluesStatus);
  const statusOfCategories = useSelector(categoryStatus);

  console.log({ statusOfCategories, statusOfClues });

  const listOfClues = clues.map((clue) => {
    return clue.cluesList;
  });

  console.log("listOfClues", listOfClues);

  // const categoriesStatus = useSelector((state) => state.categories.status);

  const x = () => {
    clues.forEach((clue) => {
      dispatch(getClues(clue.categoryID));
    });
  };

  useEffect(() => {
    dispatch(getCategories({ count: 5 }));
  }, [dispatch]);

  return (
    <>
      <Header />
      {statusOfCategories === "loading" ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          {!statusOfClues ? (
            <button onClick={() => x()} className="btn-lets-play">
              Let's play!
            </button>
          ) : statusOfClues === "loading" ? (
            <p className="loading">Loading...</p>
          ) : (
            <p>hi</p>
          )}
        </div>
      )}
    </>
  );
};

export default App;
