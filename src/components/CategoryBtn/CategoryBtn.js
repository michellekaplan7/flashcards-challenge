import React, { useState } from "react";

const CategoryBtn = ({ name }) => {
  const [categorySelected, setCategorySelected] = useState("");

  console.log(categorySelected);

  return (
    <button onClick={() => setCategorySelected(name)} className={name}>
      {name}
    </button>
  );
};

export default CategoryBtn;
