import React from "react";
import "./Card.css";

const Card = ({ question, answer, id }) => {
  return (
    <div className="card-container">
      <input type="checkbox" id={id} />

      <label className="card" htmlFor={id}>
        <div className="front">
          {question}
          <div>
            <p>Click to flip</p>
          </div>
        </div>

        <div className="back">
          {answer}
          <div>
            <p>Click to flip</p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Card;
