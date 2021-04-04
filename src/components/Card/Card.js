import React, { useState } from "react";
import "./Card.css";

const Card = ({ question, answer, id }) => {
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
          <p>{question}</p>

          <div>
            <p>Click to flip</p>
          </div>
        </div>

        <div className="back">
          <p>{answer}</p>
        </div>
      </label>
    </div>
  );
};

export default Card;
