import React, { useState, useEffect } from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";
import UserBank from "../UserBank/UserBank";

import { useSelector, useDispatch } from "react-redux";

import {
  clues,
  getClues,
  cluesStatus,
  resetClues,
} from "../../features/cluesSlice";

import { currentCategory, resetCategory } from "../../features/categorySlice";

import {
  correctAnswers,
  incorrectAnswers,
  resetUser,
} from "../../features/userSlice";

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

  const answerYes = () => setUserAnswerSelection("yes");
  const answerNo = () => setUserAnswerSelection("no");

  const answerSelectionHandler = () => {
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

  const resetAll = () => {
    dispatch(resetCategory());
    dispatch(resetClues());
    dispatch(resetUser());
  };

  useEffect(() => {
    dispatch(getClues(currentCategorySelected.id));
  }, [currentCategorySelected.id, dispatch]);

  useEffect(() => {
    setDeck(shuffle(cluesList).slice(0, 5));
  }, [cluesList]);

  useEffect(() => {}, [deck]);

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
              <>
                <div className="summary-container">
                  <p>Game over!</p>
                  <p>
                    {`You answered ${correctAmtOfAnswers}/5 questions right for a score of ${percentageCorrect}% `}
                  </p>
                </div>
                <button onClick={() => resetAll()} className="btn-start-over">
                  Start over!
                </button>
              </>
            )}
          </div>
        )}

        {userAnswerSelection && (
          <button
            onClick={() => answerSelectionHandler()}
            className="btn-next-question"
          >
            Next question
          </button>
        )}
      </div>
    </>
  );
};

export default CardsContainer;
