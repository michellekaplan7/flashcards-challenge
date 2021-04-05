import React, { useState } from "react";
import "./UserAnswer.css";
import { useDispatch } from "react-redux";

import {
  userSelectCorrectAnswer,
  userSelectIncorrectAnswer,
  increaseUserBank,
  decreaseUserBank,
} from "../../features/userSlice";

const UserAnswer = ({ deck, setDeck }) => {
  const dispatch = useDispatch();

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

  return (
    <div>
      <div className="user-answer-container">
        <h4>Did you get this question correct?</h4>

        <button onClick={answerYes}>Yes</button>
        <button onClick={answerNo}>No</button>
      </div>
      {userAnswerSelection && (
        <button onClick={() => x()} className="btn-next-question">
          Next question
        </button>
      )}
    </div>
  );
};

export default UserAnswer;
