import React, { useState } from "react";
import "./UserAnswer.css";
import { useSelector, useDispatch } from "react-redux";

// import { userSelectCorrectAnswer } from "./userSlice";

const UserAnswer = () => {
  const dispatch = useDispatch();

  const [userAnswerSelection, setUserAnswerSelection] = useState(null);

  const answerYes = () => setUserAnswerSelection("yes");
  const answerNo = () => setUserAnswerSelection("no");

  return (
    <div>
      <div className="user-answer-container">
        <h4>Did you get this question correct?</h4>

        <button onClick={answerYes}>Yes</button>
        <button onClick={answerNo}>No</button>
      </div>
      {userAnswerSelection && (
        <button
          // onClick={() => dispatch(userSelectCorrectAnswer(cluesList))}
          className="btn-next-question"
        >
          Next question
        </button>
      )}
    </div>
  );
};

export default UserAnswer;
