import React, { useState } from "react";
import "./Card.css";

const Card = ({ question, answer, value, category, id }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="card-container">
      <input
        onClick={() => setDisabled(true)}
        disabled={disabled}
        type="checkbox"
        id={id}
      />

      <label className="card" htmlFor={id}>
        <div className="front">
          <p className="question-value">value: {value}</p>
          <p className="front-text">{question}</p>
          <p className="card-category">{category}</p>

          <div>
            <p className="flip-text">Click to flip</p>
          </div>
        </div>

        <div className="back">
          <p className="back-text">{answer}</p>
        </div>
      </label>
    </div>
  );
};

export default Card;
