
'use strict'; // strict syntax

let totalScore = 0;

console.log('app is running');

let guest = prompt('Welcome to my page! what is your name?');
console.log('hi ' + guest + ', My name is Megan');
    alert('Nice to meet you, ' + guest + ' My name is Megan!');

if (guest === null)
{
    alert('I doubt your name is actually Null');
    user = prompt('what is your real name?');

}
console.log(guest);


let game = alert('We are going to play a guessing game where I will tell you something about myself, and you must type yes for true or no for false');

let question1 = prompt('I am from Panama City. Yes or no?').toLowerCase();
if (typeof(question1) === "string") {
    question1 = question1.toLowerCase();
}

    if (question1 === 'yes') {
        alert('that is incorrect, ' + guest);
    } else if(question1 === 'no') {
        alert('that is correct, ' + guest); 
        totalScore++;
    } else if (question1 === 'n') {
        alert('that is correct, ' + guest); 
        totalScore++;
    } else if (question1 === 'y') {
        alert('that is incorrect, ' + guest);
    } else {
        prompt('Oops! there was an error. Try again');
    }
    console.log(question1)

let color = prompt('is my favorite color bergundy? yes or no.').toLowerCase();
if (typeof(color) === "string") {
    color = color.toLowerCase();
}

    switch (color) {
        case 'no':
        case 'n':
            alert('close, but no cigar!');
            break;
        case 'yes':
        case 'y':
            alert('correct!');
            totalScore++;
            break;
        default:
            alert('try typing that again, ' + name);

    }
    console.log(color)

let origin = prompt('I was attacked by a bear. Yes or no?').toLowerCase();
if (typeof(origin) === 'string') {
    origin = origin.toLowerCase(); //can this be used for switch?
}

    switch (origin) {
        case 'yes':
            alert('incorrect!');
            break;
        case 'no':
            alert('correct!');
            totalScore++;
            break;
        case 'n':
            alert('correctamundo!');
            totalScore++;
            break;
        case 'y':
            alert('WRONG!');
            break;
        default:
            alert('try typing that again, ' + name);

    }
    console.log(origin)

let question4 = prompt('My childhood home is adjacent to a famous haunted house. Yes or no?').toLowerCase();
if (typeof(question4) === 'string') {
    question4 = question4.toLowerCase();
}

    if (question4 === 'no') {
        alert('that is incorrect, ' + guest);
    } else if(question4 === 'yes') {
        alert('that is correct, ' + guest);
        totalScore++; 
    } else if (question4 === 'y') {
        alert('that is correct, ' + guest); 
        totalScore++;
    } else if (question4 === 'n') {
        alert('that is incorrect, ' + guest);
    } else {
        prompt('Oops! there was an error. Try again');
    }
   console.log(question4)

let question5 = prompt('I work for the military. Yes or no?').toLowerCase();
if (typeof(question5) === 'string') {
    question5 = question5.toLowerCase();
}

    if (question5 === 'no') {
        alert('that is incorrect, ' + guest);
    } else if(question5 === 'yes') {
        alert('that is correct, ' + guest); 
        totalScore++;
    } else if (question5 === 'y') {
        alert('that is correct, ' + guest);
        totalScore++; 
    } else if (question5 === 'n') {
        alert('that is incorrect, ' + guest);
    } else {
        prompt('Oops! there was an error. Try again');
    }
    console.log(question5)

    let answer = 7;
    let numberofattempts = 4;

    // while (numberofattempts > 0) {
        let userAnswer = prompt("Guess a number between 6 and 8!");
        console.log("this is the user answer: " + userAnswer);
        numberofattempts--;
        if (userAnswer == answer) {
            alert("You are correct!");
            totalScore++;
            numberofattempts = 0;
        } else if (userAnswer < answer) {
            alert("Guess is too low. You have" + numberofattempts +' left');
        } else if (userAnswer > answer) {
            alert("Guess is too high! You have " + numberofattempts +" left");
        } else {
            alert("Guess again!");
        }


let favFoods = ["tacos", "sushi", "burgers", "pizza"];
let attempts = 6;
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
      break;
    } else {
        alert("That is incorrect.");
    }

    }
}

if (!attempts) {
  alert("No more attempts.");
}
    
alert("you got a total of " + totalScore + ' points');
console.log(totalScore);

alert("Thanks for playing! " + guest);




