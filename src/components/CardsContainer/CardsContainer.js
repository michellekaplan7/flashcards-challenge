// import React from "react";
// import "./CardContainer.css";
// import Card from "../Card/Card";

// import { data } from "../../helpers/data";

// const flashcards = data.cards.map((card, i) => {
//   return (
//     <Card
//       key={i}
//       question={card.question}
//       answer={card.answer}
//       category={card.category}
//     />
//   );
// });

// const CardContainer = () => {
//   return (
//     <div className="category-selection-container">
//       <h2>Cards</h2>
//       <div className="btn-container">{flashcards}</div>
//     </div>
//   );
// };

// export default CardContainer;

import React from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";

import { data } from "../../helpers/data";

const flashcards = data.cards.map((card, i) => {
  return (
    <Card
      key={i}
      id={i}
      question={card.question}
      answer={card.answer}
      category={card.category}
    />
  );
});

const CardsContainer = () => {
  return (
    <div className="flashcards-container">
      <h2>Cards</h2>
      {flashcards}
    </div>
  );
};

export default CardsContainer;
