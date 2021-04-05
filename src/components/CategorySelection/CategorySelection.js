import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CategoryBtn from "../CategoryBtn/CategoryBtn";

import { selectCategory } from "../../features/categorySlice";

import "./CategorySelection.css";

const CategorySelection = ({ categories }) => {
  const [categoryChoice, setCategoryChoice] = useState(null);
  const dispatch = useDispatch();

  const categoryBtns = categories.map((category, i) => {
    return (
      <CategoryBtn
        key={i}
        id={category.id}
        category={category}
        setCategoryChoice={setCategoryChoice}
      />
    );
  });

  return (
    <div className="category-selection-container">
      <h2>Choose a category...</h2>
      <div className="btn-container">{categoryBtns}</div>

      {categoryChoice && (
        <button
          onClick={() => dispatch(selectCategory(categoryChoice))}
          className="next-btn"
        >
          next
        </button>
      )}
    </div>
  );
};

export default CategorySelection;
