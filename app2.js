
'use strict'; // strict syntax

//console.log('app is running');

let name = prompt('Welcome to my page! what is your name?');
//console.log('hi ' + name + ', My name is Megan');
    alert('Nice to meet you, ' + name + ' My name is Megan!');

if (name === null)
{
    alert('I doubt your name is actually Null');
    user = prompt('what is your real name?');

}
//console.log(name);


let game = alert('We are going to play a guessing game where I will tell you something about myself, and you must type yes for true or no for false');

let question1 = prompt('I am from Panama City. Yes or no?').toLowerCase();
if (typeof(question1) === "string") {
    question1 = question1.toLowerCase();
}

    if (question1 === 'yes') {
        alert('that is incorrect, ' + name);
    } else if(question1 === 'no') {
        alert('that is correct, ' + name); 
    } else if (question1 === 'n') {
        alert('that is correct, ' + name); 
    } else if (question1 === 'y') {
        alert('that is incorrect, ' + name);
    } else {
        prompt('Oops! there was an error. Try again');
    }
    //console.log(question1)

let color = prompt('is my favorite color bergundy? yes or no.').toLowerCase();
if (typeof(color) === "string") {
    color = color.toLowerCase();
}

    switch (color) {
        case 'no':
            alert('close, but no cigar!');
            break;
        case 'yes':
            alert('correct!');
            break;
        case 'y':
            alert('correctamundo!');
            break;
        case 'n':
            alert('WRONG!');
            break;
        default:
            alert('try typing that again, ' + name);

    }
    //console.log(color)

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
            break;
        case 'n':
            alert('correctamundo!');
            break;
        case 'y':
            alert('WRONG!');
            break;
        default:
            alert('try typing that again, ' + name);

    }
    //console.log(origin)

let question4 = prompt('My childhood home is adjacent to a famous haunted house. Yes or no?').toLowerCase();
if (typeof(question4) === 'string') {
    question4 = question4.toLowerCase();
}

    if (question4 === 'no') {
        alert('that is incorrect, ' + name);
    } else if(question4 === 'yes') {
        alert('that is correct, ' + name); 
    } else if (question4 === 'y') {
        alert('that is correct, ' + name); 
    } else if (question4 === 'n') {
        alert('that is incorrect, ' + name);
    } else {
        prompt('Oops! there was an error. Try again');
    }
   //console.log(question4)

let question5 = prompt('I work for the military. Yes or no?').toLowerCase();
if (typeof(question5) === 'string') {
    question5 = question5.toLowerCase();
}

    if (question5 === 'no') {
        alert('that is incorrect, ' + name);
    } else if(question5 === 'yes') {
        alert('that is correct, ' + name); 
    } else if (question5 === 'y') {
        alert('that is correct, ' + name); 
    } else if (question5 === 'n') {
        alert('that is incorrect, ' + name);
    } else {
        prompt('Oops! there was an error. Try again');
    }
    //console.log(question5)

    alert("Thanks for playing! " + name);