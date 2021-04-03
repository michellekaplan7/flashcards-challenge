import React from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "./components/CategorySelection/categorySlice";
import "./App.css";

import Header from "./components/Header/Header";
import CategorySelection from "./components/CategorySelection/CategorySelection";
import CardsContainer from "./components/CardsContainer/CardsContainer";

const App = () => {
  const category = useSelector(selectCategory);
  console.log({ category });

  return (
    <>
      <Header />
      <div>
        <CardsContainer />

        {/* {!category ? (
          <CategorySelection />
        ) : (
          <h2 className="category-header">
            Your selected category is <span>{`< ${category} >`}</span>
          </h2>
        )} */}
      </div>
    </>
  );
};

export default App;
