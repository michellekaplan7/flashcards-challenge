import React, { useState, useEffect } from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";
import UserBank from "../UserBank/UserBank";

import { useSelector, useDispatch } from "react-redux";

import { clues, getClues, cluesStatus } from "../../features/cluesSlice";

import { currentCategory } from "../../features/categorySlice";

import { correctAnswers, incorrectAnswers } from "../../features/userSlice";

import {
  userSelectCorrectAnswer,
  userSelectIncorrectAnswer,
  increaseUserBank,
  decreaseUserBank,
} from "../../features/userSlice";

const CardsContainer = () => {
  const cluesList = useSelector(clues);
  const correctAmtOfAnswers = useSelector(correctAnswers).length;
  const incorrectAmtOfAnswers = useSelector(incorrectAnswers).length;
  const totalAmountOfQuestions = correctAmtOfAnswers + incorrectAmtOfAnswers;
  const percentageCorrect =
    (correctAmtOfAnswers / totalAmountOfQuestions) * 100;

  const cluesLoadingStatus = useSelector(cluesStatus);

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

  const [userAnswerSelection, setUserAnswerSelection] = useState(null);
  console.log({ userAnswerSelection });

  const answerYes = () => setUserAnswerSelection("yes");
  const answerNo = () => setUserAnswerSelection("no");

  const x = () => {
    if (userAnswerSelection === "yes") {
      dispatch(userSelectCorrectAnswer(deck[deck.length - 1]));
      dispatch(increaseUserBank(deck[deck.length - 1].value));
      setUserAnswerSelection(null);
    } else if (userAnswerSelection === "no") {
      dispatch(userSelectIncorrectAnswer(deck[deck.length - 1]));
      dispatch(decreaseUserBank(deck[deck.length - 1].value));
      setUserAnswerSelection(null);
    }

    deck.splice(deck.length - 1, 1);
    setDeck(deck);
  };

  useEffect(() => {
    dispatch(getClues(currentCategorySelected.id));
  }, [currentCategorySelected.id, dispatch]);

  useEffect(() => {
    setDeck(shuffle(cluesList).slice(0, 5));
  }, [cluesList]);

  useEffect(() => {}, [deck]);

  console.log("deck in container", deck);

  const flashcards = deck.map((card, i) => {
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
      <div className="wrapper">
        {cluesLoadingStatus === "loading" ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="flashcards-container">
            {flashcards}
            <UserBank />
            {deck.length && (
              <div className="user-answer-container">
                <h4>Did you get this question correct?</h4>

                <button className="btn-answer-selection" onClick={answerYes}>
                  Yes
                </button>
                <button className="btn-answer-selection" onClick={answerNo}>
                  No
                </button>
              </div>
            )}

            {totalAmountOfQuestions === 5 && (
              <div className="summary-container">
                <p>Game over!</p>
                <p>
                  {`You answered ${correctAmtOfAnswers}/5 questions right for a score of ${percentageCorrect}% `}
                </p>
              </div>
            )}
          </div>
        )}

        {userAnswerSelection && (
          <button onClick={() => x()} className="btn-next-question">
            Next question
          </button>
        )}
      </div>
    </>
  );
};

export default CardsContainer;
