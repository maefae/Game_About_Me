'use strict'; // strict syntax

let totalScore = 0;

console.log('app is running');

let guest = prompt('Welcome to my page! what is your name?');
console.log('hi ' + guest + ', My name is Megan');
alert('Nice to meet you, ' + guest + ' My name is Megan!');

if (guest === null) {
  alert('I doubt your name is actually Null');
  user = prompt('what is your real name?');

}
console.log(guest);

let game = alert('We are going to play a guessing game where I will tell you something about myself, and you must type yes for true or no for false');

let multipleQuestions = [
  'I am from Panama City. Yes or no?',
  'Is my favorite color bergundy? Yes or no?',
  'I was attacked by a bear. Yes or no?',
  'My childhood home is adjacent to a famous haunted house. Yes or no?',
  'I work for the military. Yes or no?'
];

let answers = [
  'no',
  'yes',
  'no',
  'yes',
  'yes',
];

function manyQuestions() {
  for (let i = 0; i < multipleQuestions.length; i++) {
    let response = prompt(multipleQuestions[i]);

    if (typeof(response) === 'string') {
      response = response.toLowerCase();
    }
    if (response === answers[i]) {
      alert('You are correct!');
      totalScore++;
      console.log('Correct!');
    } 
    if (response !== answers[i]) {
      alert('That is incorrect!');
      console.log('incorrect');
    } 
  }
}

manyQuestions();


function favNumber () {
  let answer = 7;
  let numberofattempts = 4;

  while (numberofattempts > 0) {
    let userAnswer = prompt("Guess what my favorite number is between 1 and 10!");
    console.log("this is the user answer: " + userAnswer);
    numberofattempts--;
    if (userAnswer == answer) {
      alert("You are correct!");
      totalScore++;
      numberofattempts = 0;
    } else if (userAnswer < answer) {
      alert("Guess is too low. You have" + numberofattempts + ' left');
    } else if (userAnswer > answer) {
      alert("Guess is too high! You have " + numberofattempts + " left");
    } else {
      alert("Guess again!");
    }
  }
}
favNumber();


function favFood() {

  let favFoods = ["tacos", "sushi", "burgers", "pizza"];
  let attempts = 6;
  let correct = false;
  while (attempts) {
    let foodGuess = prompt("Guess my fav food");
    attempts -= 1;

    for (let i = 0; i < favFoods.length; i++) {
      if (foodGuess === favFoods[i]) {
        console.log('this is foodGuess' + foodGuess);
        console.log('this is favefoods' + favFoods[i]);
        alert("That is correct.");
        totalScore += 1;
        attempts = 0;
        correct = true;
        break;
      }

    }
    if (correct === false) {
      alert("That is incorrect.");
    } else {
      break;
    }
  }
  if (attempts === 0 && correct === false) {
    alert("No more attempts.");
  }
}

favFood();


alert("you got a total of " + totalScore + ' points');
console.log(totalScore);

alert("Thanks for playing! " + guest);


