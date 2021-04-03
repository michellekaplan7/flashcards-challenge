// import React from "react";
// import "./CategorySelection.css";
// import CategoryBtn from "../CategoryBtn/CategoryBtn";

// import { data } from "../../helpers/data";

// const categoryBtns = data.categories.map((category, i) => {
//   return <CategoryBtn key={i} name={category} />;
// });

// const CategorySelection = () => {
//   return (
//     <div className="category-selection-container">
//       <h2>Choose a category...</h2>
//       <div className="btn-container">{categoryBtns}</div>
//     </div>
//   );
// };

// export default CategorySelection;

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { categorySelection } from "./categorySlice";

import "./CategorySelection.css";

const CategorySelection = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const dispatch = useDispatch();

  console.log(categorySelected);

  return (
    <div className="category-selection-container">
      <h2>Choose a category...</h2>
      <div className="btn-container">
        <button
          onClick={() => setCategorySelected("geography")}
          className="geography"
        >
          Geography
        </button>
        <button
          onClick={() => setCategorySelected("entertainment")}
          className="entertainment"
        >
          Entertainment
        </button>
        <button
          onClick={() => setCategorySelected("science")}
          className="science"
        >
          Science
        </button>
        <button onClick={() => setCategorySelected("all")} className="all">
          All
        </button>
      </div>

      {categorySelected !== "" && (
        <button
          onClick={() => dispatch(categorySelection(categorySelected))}
          className="next-btn"
        >
          next
        </button>
      )}
    </div>
  );
};

export default CategorySelection;
