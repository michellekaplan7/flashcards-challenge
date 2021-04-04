import React from "react";

const CategoryBtn = ({ category, setCategorySelected }) => {
  return (
    <button onClick={() => setCategorySelected(category)}>
      {category.title}
    </button>
  );
};

export default CategoryBtn;
