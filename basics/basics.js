/**
 *  Hoisting Concept 
 */


var firstName = 'steve';

greet();

console.log(greetMessage + firstName + symbol);

var greetMessage = 'Good Morning ';

var symbol = '!';

console.log(greetMessage + firstName + symbol);

function greet() {
    greetMessage = 'Hi ';
    symbol = '#';
    console.log(greetMessage + firstName + symbol);
}



var firstName2 = 'John';
var greetMessage2 = 'Good Morning ';
var symbol2 = '!';

greet2();

console.log(greetMessage2 + firstName2 + symbol2);

function greet2() {
    console.log(greetMessage2 + firstName2 + symbol2);
}


/**
 * Coersion 
 */

var num1 = 10;
var num2 = '20';
var city = 'hyderabad';

console.log(num1 + num2);
console.log(city + num1);
console.log(num2++);
console.log(num1 + num2);


/**
 * condtion check and use of trim method
 */

var color = 'Blue ';
var color2 = 'Blue ';

if (color.toLowerCase() === 'blue') {
    console.log('correct');
} else {
    console.log('wrong');
}

if (color2.toLowerCase().trim() === 'blue') {
    console.log('correct');
} else {
    console.log('wrong');
}

/**
 * switch statement
 */

var date = new Date();

var day = date.getDay();

switch (day) {
    case 0:
        console.log('today is sunday');
        break;
    case 1:
        console.log('today is monday');
        break;
    case 2:
        console.log('today is tuesday');
        break;
    case 3:
        console.log('today is wednesday');
        break;
    case 4:
        console.log('today is thursday');
        break;
    case 5:
        console.log('today is friday');
        break;
    case 6:
        console.log('today is saturday');
        break;
    default:
        console.log('today is unknown');

}


/**
 * display the letters starting with b
 */

var sentence = "The brown bear jumped over the big fence! with bat";

for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === 'b') {
        const ot = sentence.slice(i);
        ot.indexOf(' ') !== -1 ? console.log(ot.slice(0, ot.indexOf(' '))) :
            console.log(ot.slice(0,));
    }
}

/**
 * fibnocci series using while loop
 */

var fibSeq = '',
    num1 = 0;
num2 = 1;
newNum = 0;

while (newNum <= 100) {
    fibSeq += newNum + ', ';
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
}

console.log(fibSeq.slice(fibSeq, fibSeq.lastIndexOf(',')));


/**
 * fibnocci series using for loop and a parameter of length
 */

var fibSeq2 = function (length) {
    var seq = [0, 1];

    for (var i = 2; i < length; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }

    return seq;
}

console.log(fibSeq2(10));

/**
 * Palindrome - check if a string is palindome
 */

 function isPalindrome(input) {
    var inputToArray = input.split('');
    var reverseArray = [];
    for (var i=0; i<inputToArray.length; i++) {
        reverseArray.unshift(inputToArray[i]);
    }

    return reverseArray.join('') === input;
}

console.log(isPalindrome('phanee'));
console.log(isPalindrome('markram'));
console.log(isPalindrome('racecar'));

/**
 * remove duplicate items from an array
 */

var fruits = ["banana", "kiwi", "mango", "kiwi", "apple", "kiwi", "pear", "banana", "apple"];
var newFruits = [];

for (var i = 0; i < fruits.length; i++) {

    if (i === fruits.indexOf(fruits[i])) {
        newFruits.push(fruits[i]);
    }
}

console.log(fruits);
console.log(newFruits);


/**
 * concept of functions
 * what is the output of the following
 */

showGreeting();

function showGreeting() {
    console.log('hello good morning!');
}

showGreeting();

function showGreeting() {
    console.log('hello good evening!');
}

showGreeting();

// showMessage();

var showMessage = function () {
    console.log('hello good morning!');
}

showMessage();

var showMessage = function () {
    console.log('hello good evening!');
}

showMessage();

/**
 * Objects, ways of creating objects
 */

/**
 * Object literal
 */

var company = {
    name: 'cgi',
    city: 'hyd',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(company);

/**
 * Object Constructor
 */

var emp1 = new Object();

emp1.firstName = 'Joe';
emp1.lastName = 'Doe';

console.log(emp1);

/**
 * Object.create
 */

 var emp2 = Object.create(company);

 emp2.firstName = 'John';
 emp2.lastName = 'Doe';
 
 console.log(emp2.getFullName());

/**
 * function constructors
 */

function Country(name, capital) {
    this.name = name;
    this.capital = capital;
}

var india = new Country('India', 'New Delhi');
var US = new Country('US', 'Washington DC');
var canada = new Country('Canada', 'Ottawa');

Country.prototype.population = 100;

india.population = 1000;

console.log(india);

/**
 * Example of Constructor and Prototype
 */

function Question(weight, correctAnswer, learnerAnswer) {
    this.weight = weight;
    this.correctAnswer = correctAnswer;
    this.learnerAnswer = learnerAnswer;
    this.correct =
        (this.correctAnswer.toUpperCase() === this.learnerAnswer.toUpperCase());
}

Question.prototype.getScore = function () {
    if (this.correct) {
        return this.weight;
    } else {
        return 0;
    }
}

var questions = [];
var finalScore = 0;
var possibleScore = 0;

questions.push(new Question(1, 'A', 'A'));
questions.push(new Question(1, 'A', 'B'));
questions.push(new Question(1, 'D', 'D'));
questions.push(new Question(1, 'B', 'B'));
questions.push(new Question(1, 'A', 'B'));

for (var i = 0; i < questions.length; i++) {
    finalScore += questions[i].getScore();
    possibleScore += questions[i].weight;
}

console.log('your Score is ' + finalScore + ' out of ' + possibleScore);

// with class structure ES6

class Question2 {
    constructor(weight, correctAnswer, learnerAnswer) {
        this.weight = weight;
        this.correctAnswer = correctAnswer;
        this.learnerAnswer = learnerAnswer;
        this.correct =
            (this.correctAnswer.toUpperCase() === this.learnerAnswer.toUpperCase());
    }

    getScore() {
        if (this.correct) {
            return this.weight;
        } else {
            return 0;
        }
    }    
}

var questions = [];
var finalScore = 0;
var possibleScore = 0;

questions.push(new Question(1, 'A', 'A'));
questions.push(new Question(1, 'A', 'B'));
questions.push(new Question(1, 'D', 'D'));
questions.push(new Question(1, 'B', 'B'));
questions.push(new Question(1, 'A', 'B'));

for (var i = 0; i < questions.length; i++) {
    finalScore += questions[i].getScore();
    possibleScore += questions[i].weight;
}

console.log(`your score is ${finalScore} out of ${possibleScore}`);

// another example of constructor and prototype

function Poll(poll, option1, option2, inputOption) {
    this.poll = poll,
    this.option1 = option1,
    this.option2 = option2,
    this.inputOption = inputOption
}

Poll.prototype.getVoteCount = function() {
    if (this.inputOption === this.option1) {
        return this.option1;
    } else if (this.inputOption = this.option2) {
        return this.option2;
    }
}
 

var inputs = [];
var opt1 = 0;
var opt2 = 0;

var opt1Per;
var opt2Per;

inputs.push(new Poll('who will win today match ?', 'India', 'South Africa', 'India'));
inputs.push(new Poll('who will win today match ?', 'India', 'South Africa', 'South Africa'));
inputs.push(new Poll('who will win today match ?', 'India', 'South Africa', 'South Africa'));
inputs.push(new Poll('who will win today match ?', 'India', 'South Africa', 'South Africa'));
inputs.push(new Poll('who will win today match ?', 'India', 'South Africa', 'South Africa'));

for(var i=0; i<inputs.length; i++) {
    var inputQuestion = inputs[i].poll;

    var inputOption = inputs[i].getVoteCount().toUpperCase();    
    if (inputOption === inputs[i].option1.toUpperCase()) {
        opt1 += 1;
    } else if (inputOption === inputs[i].option2.toUpperCase()) {
        opt2 += 1;
    }
}

opt1Per = (opt1 * 100) / inputs.length;
opt2Per = (opt2 * 100) / inputs.length;

console.log(`${inputQuestion}: India: ${opt1Per}%, South Africa: ${opt2Per}%`);


// function defination and arrow function

function add(num) {
    if(num % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
} 

console.log(add(17));
console.log(add(172));


const add2 = (num) => num % 2 === 0 ? 'even num' : 'odd num';

console.log(add2(17));
console.log(add2(172));


// DOM Manipulation

var tableObj = {
    methodHead: "Method",
    descHead: "Description",
    methods: [
        "getElementById()",
        "getElementsByTagName()",
        "getElementsByClassName()",
        "querySelector()",
        "querySelectorAll()"
    ],
    descriptions: [
        "Selects the first element it encounters with the ID you enter. The ID is entered as a string. (e.g. document.getElementById('content');) This method will return a single node.",
        "Selects all the elements in the DOM for the tag you enter. The tag value is entered as a string. (e.g. document.getElementsByTagName('li');) This method returns an array of all the matching nodes.",
        "Selects all the elements in the DOM that is assigned the class that you enter. The class name should be expressed as a string. (e.g. document.getElementById('li');) This method returns an array of all the matching nodes.",
        "Selects the first element in the DOM that matches the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelector('#content li');) This method returns the first element that matches the criteria.",
        "Selects all the elements in the DOM that match the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelectorAll('#content li');) This method returns an array of all elements that match the criteria."
    ]
};


var fillTable = function(obj) {
    const tableHeadNodes = document.querySelectorAll('#table th');
    const tableNodes = document.querySelectorAll('#table td');
    let methods = obj.methods;
    let descriptions = obj.descriptions;
    let loc = 0;

    tableHeadNodes[0].innerHTML = obj.methodHead;
    tableHeadNodes[1].innerHTML = obj.descHead;

    for (var i=0; i<tableNodes.length; i++) {
        tableNodes[i].innerHTML = methods[loc];
        tableNodes[++i].innerHTML = descriptions[loc];
        loc++;
    }
}

fillTable(tableObj);



var ul = document.querySelector('ul');
clickCount = 0;

ul.addEventListener('click', function() {

    while(clickCount < ul.childNodes.length && ul.childNodes[clickCount].nodeType !== 1) {
        clickCount++;
    }    
    
    if (ul.childNodes[clickCount]) {
        ul.childNodes[clickCount].style.color = 'green';
    }

    clickCount++;
})