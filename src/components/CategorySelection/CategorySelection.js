import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getClues } from "../CategorySelection/cluesSlice";
import CategoryBtn from "../CategoryBtn/CategoryBtn";

import "./CategorySelection.css";

const CategorySelection = ({ categories }) => {
  const [categorySelected, setCategorySelected] = useState({});
  const dispatch = useDispatch();

  console.log({ categorySelected });

  const categoryBtns = categories.map((category, i) => {
    return (
      <CategoryBtn
        key={i}
        id={category.id}
        category={category}
        setCategorySelected={setCategorySelected}
      />
    );
  });

  return (
    <div className="category-selection-container">
      <h2>Choose a category...</h2>
      <div className="btn-container">{categoryBtns}</div>

      {categorySelected !== "" && (
        <button
          onClick={() => dispatch(getClues(categorySelected.id))}
          className="next-btn"
        >
          next
        </button>
      )}
    </div>
  );
};

export default CategorySelection;
