import React, { useEffect } from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";

import { useSelector, useDispatch } from "react-redux";

import { clues, getClues } from "../CategorySelection/cluesSlice";

import { currentCategory } from "../CategorySelection/categorySlice";

const CardsContainer = () => {
  const cluesList = useSelector(clues);
  const dispatch = useDispatch();
  const currentCategorySelected = useSelector(currentCategory);

  const shuffle = (arr) => {
    const array = JSON.parse(JSON.stringify(arr));

    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      // debugger;
      temporaryValue = array[currentIndex];

      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  useEffect(() => {
    dispatch(getClues(currentCategorySelected.id));
  }, [currentCategorySelected.id, dispatch]);

  const flashcards = shuffle(cluesList)
    .slice(0, 6)
    .map((card, i) => {
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

  return (
    <>
      <h3>Your selected category is {currentCategorySelected.title}</h3>
      <div className="flashcards-container">{flashcards}</div>
    </>
  );
};

export default CardsContainer;
