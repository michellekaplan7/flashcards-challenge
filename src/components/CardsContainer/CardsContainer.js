import React, { useState, useEffect } from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";
import UserBank from "../UserBank/UserBank";

import Column from "../Column/Column";

import { useSelector, useDispatch } from "react-redux";

import {
  clues,
  getClues,
  cluesStatus,
  resetClues,
  values,
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

const CardsContainer = ({ listOfClues, clues }) => {
  const clueValues = useSelector(values);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // const cluesList = useSelector(clues);
  const correctAmtOfAnswers = useSelector(correctAnswers).length;
  const incorrectAmtOfAnswers = useSelector(incorrectAnswers).length;

  const totalAmountOfQuestions = correctAmtOfAnswers + incorrectAmtOfAnswers;
  const percentageCorrect =
    (correctAmtOfAnswers / totalAmountOfQuestions) * 100;

  console.log("listOFClues in cardscontainer ", listOfClues);

  console.log("current question", currentQuestion);

  // const cluesLoadingStatus = useSelector(cluesStatus);

  const dispatch = useDispatch();
  // const currentCategorySelected = useSelector(currentCategory);
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

  // const resetAll = () => {
  //   dispatch(resetCategory());
  //   dispatch(resetClues());
  //   dispatch(resetUser());
  // };

  // useEffect(() => {
  //   dispatch(getClues(currentCategorySelected.id));
  // }, [currentCategorySelected.id, dispatch]);

  // useEffect(() => {
  //   setDeck(shuffle(cluesList).slice(0, 5));
  // }, [cluesList]);

  // useEffect(() => {}, [deck]);

  console.log("clues in cardscontainer", clues);

  return (
    <div className="game">
      <div className="game__title">Jeopardy</div>

      <div className="game__board">
        <table className="board">
          <colgroup>
            {clues.map((category) => (
              <col
                key={category}
                style={{ width: `${100 / category.length}%` }}
              />
            ))}
          </colgroup>
          <thead>
            <tr>
              {clues.map((category) => (
                <th className="board__category" key={category}>
                  {category.categoryTitle}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clueValues.map((value, index) => (
              <tr key={value}>
                {clues.map((category) => (
                  <td key={Math.random()} className="board__value">
                    <div className="board__value-inner">
                      <button
                        onClick={() => {
                          let found = category.cluesList.find(
                            (clue) => clue.value === value
                          );
                          let foundClue = {
                            ...found,
                            title: category.categoryTitle,
                          };
                          setCurrentQuestion(foundClue);
                        }}
                      >
                        {value}
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {currentQuestion && (
        <Card
          // key={i}
          // id={i}
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          category={currentQuestion.title}
          value={currentQuestion.value}
        />
      )}
    </div>
  );
};

export default CardsContainer;
