import React, { useState, useEffect } from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";

import { useSelector, useDispatch } from "react-redux";

import { clues, getClues } from "../../features/cluesSlice";

import { currentCategory } from "../../features/categorySlice";

import UserAnswer from "../UserAnswer/UserAnswer";

const CardsContainer = () => {
  const cluesList = useSelector(clues);
  const dispatch = useDispatch();
  const currentCategorySelected = useSelector(currentCategory);
  const [deck, setDeck] = useState([]);

  console.log({ deck, cluesList });

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

      temporaryValue = array[currentIndex];

      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  useEffect(() => {
    dispatch(getClues(currentCategorySelected.id));
  }, [currentCategorySelected.id, dispatch]);

  useEffect(() => {
    setDeck(shuffle(cluesList));
  }, [cluesList]);

  const flashcards = deck.slice(0, 6).map((card, i) => {
    return (
      <Card
        key={i}
        id={i}
        question={card.question}
        answer={card.answer}
        category={card.category}
        value={card.value}
      />
    );
  });

  return (
    <>
      <h3 className="selected-category-text">
        Your selected category is{" "}
        <span>{`< ${currentCategorySelected.title} >`}</span>
      </h3>
      <div className="flashcards-container">{flashcards}</div>
      <UserAnswer />
    </>
  );
};

export default CardsContainer;
