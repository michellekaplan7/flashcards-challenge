import React from "react";

const CategoryBtn = ({ category, setCategoryChoice }) => {
  return (
    <button onClick={() => setCategoryChoice(category)}>
      {category.title}
    </button>
  );
};

export default CategoryBtn;
