import React, { useState, useEffect } from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";

import { useSelector } from "react-redux";

import { clues } from "../CategorySelection/cluesSlice";

const CardsContainer = () => {
  const cluesList = useSelector(clues);

  // const getRandomIndex = () => {
  //   let random = Math.floor(Math.random() * deck.length);
  //   return random;
  // };

  // const shuffle = () => {
  //   for (let i = deck.length - 1; i >= 0; i--) {
  //     let randomIndex = getRandomIndex();
  //     let randomCard = deck.splice(randomIndex, 1);
  //     let card = randomCard.pop();
  //     console.log("card", card);
  //     deck.unshift(card);
  //   }
  // };

  const flashcards = cluesList.map((card, i) => {
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

  return <div className="flashcards-container">{flashcards}</div>;
};

export default CardsContainer;
