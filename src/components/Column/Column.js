import React from "react";
import Card from "../Card/Card";

const Column = ({ listOfClues, index }) => {
  const test = listOfClues[index];
  console.log("test", test);
  //   console.log(
  //     "at index",
  //     test.map((clue, i) => clue.question)
  //   );
  console.log("listOfClues #1 in COLUMN", listOfClues[0]);
  console.log("listOfClues #2 in COLUMN", listOfClues[1]);
  console.log("listOfClues #3 in COLUMN", listOfClues[2]);
  console.log("listOfClues #4 in COLUMN", listOfClues[3]);
  console.log("listOfClues #5 in COLUMN", listOfClues[4]);

  const cards = listOfClues[index].map((clue, i) => {
    console.log({ clue });

    return (
      <Card
        key={i}
        id={i}
        question={clue.question}
        answer={clue.answer}
        value={clue.value}
      />
    );
  });

  return <div>hi</div>;
};

export default Column;
