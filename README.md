# Flashcards

A "jeopary" like trivia game where the user can select a category and track the amount of money they've made!

<!-- ## Link to Live Site
- [Click here!](https://michellekaplan7.github.io/flashcards-challenge/)
* Next step is to make website more responsive! -->

## Introduction
This website was built with React, React Hooks, and Redux. I used the Redux Toolkit to track global state and used the createAsyncThunk to make API calls to the jService API. 

Thanks for visiting!

## Screenshot
![flashcards-select-category](https://user-images.githubusercontent.com/56200182/113580114-78658a00-95e2-11eb-9248-4d2a7bc93694.png)

![flashcards-card](https://user-images.githubusercontent.com/56200182/113580116-78fe2080-95e2-11eb-872d-a57d2fb12311.png)

![flashcards-gameover](https://user-images.githubusercontent.com/56200182/113580117-7996b700-95e2-11eb-8e7c-1b5a0b97ad87.png)

## Directions for Use
- When the user firsts land on the site, they will be prompted to select a category.
- Once they select a category, they will click next and a list of clues will be fetched and displayed. 
- Now the user will see the front side of the flashcard with the dollar amount, category, and question. Once the user clicks on the card, they will see the correct answer on the backside of the card.
- The user can then answer whether they got the question correct or incorrect.
- Upon clicking the next question button, the dollar value will either be added or subtracted to their bank depending on whether they answered that they got the question correct or incorrect.
- When the user makes it through the flashcards, they will see a summary screen at the end that shows them the total amount of questions they got correct, a percentage score, along with their final bank. 
- The user will then see a start over button which will clear out the redux store and take them back to the starting select category screen.
- Have fun!

## Technology Used
- React
- React Hooks
- Redux
- Redux ToolKit
- CSS
- NPM
- jService API

## How to run on a local machine with NPM

1. Shut down any live servers you currently have running (control + c)
2. Clone down this repo to your desired location
3. ```cd``` into the new repo directory
4. Install the library dependencies by running: ```npm install```
5. Then, run `npm start` in your terminal
6. Go to `http://localhost:8080/` and you should see the page there
7. Then, you can enter `control + c` in your terminal to stop the server at any time

## This project was created by:

- [Michelle Kaplan](https://github.com/MichelleKaplan7)
