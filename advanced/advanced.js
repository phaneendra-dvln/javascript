// How this works

var name = 'global';

var obj1 = {
    name: 'obj1',
    fun1: function () {
        console.log('from obj1');
        console.log(this);
        console.log(this.name);
    }
}

var obj2 = {
    name: 'obj2',
    fun2: obj1.fun1
}

var obj3 = {
    name: 'obj3',
    fun3: obj2.fun2
}

obj3.fun3();

function fun1() {
    console.log('from fun1 function');
    console.log(this);
    console.log(this.name);
}

fun1();

function fun2() {
    console.log('from fun2 function');
}

fun2.name = 'fun2';
fun2.fun3 = function () {
    console.log('from fun3 function');
    console.log(this);
    console.log(this.name);
}

fun2.fun3();

// Call, Apply

var player1 = {
    firstName: 'Virat',
    lastName: 'Kohli',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var player2 = {
    firstName: 'Rohit',
    lastName: 'Sharma',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var playerInfo = function (country, rating) {
    console.log(this.firstName + " " + country + " " + rating);
}

playerInfo.call(player1, "India", 700);
playerInfo.apply(player2, ["India", 600]);

console.log(player1.fullName.call(player2));

// Bind

var playerInfoLog = playerInfo.bind(player1, "India");

playerInfoLog(700);


/**
 * Examples of call method, how this gets changed when using callbacks and how bind is used
 * how arrow functions resolve the this conflict
 *  */

var firstName = 'Jasprit';
var lastName = 'Bumrah';

var p1 = {
    firstName: 'Mohammad',
    lastName: 'Siraj'
}

var p2 = {
    firstName: 'Kuldeep',
    lastName: 'Yadav'
}

var getPlayer = function () {
    console.log(this.firstName + " " + this.lastName);
}

var showPlayer = function () {
    setTimeout(function () {
        console.log(this.firstName + " " + this.lastName);
    }, 2000);
}

var showPlayer2 = function () {
    var that = this;
    setTimeout(function () {
        console.log(that.firstName + " " + that.lastName);
    }, 2000);
}

var showPlayer3 = function () {
    setTimeout(function () {
        console.log(this.firstName + " " + this.lastName);
    }.bind(this), 2000);
}

// one of the main use of arrow functions

var showPlayer4 = function () {
    setTimeout(() => {
        console.log(this.firstName + " " + this.lastName);
    }, 2000);
}

getPlayer();
getPlayer.call(p1);
getPlayer.call(p2);
showPlayer();
showPlayer.call(p1);
showPlayer.call(p2);
showPlayer2();
showPlayer2.call(p1);
showPlayer2.call(p2);
showPlayer3();
showPlayer3.call(p1);
showPlayer3.call(p2);
showPlayer4();
showPlayer4.call(p1);
showPlayer4.call(p2);



// making objects immutable

var stateInfo = {
    name: 'Kerela',
    capital: 'Trivendrum',
    population: 1,
    formation: 'November 1 1956'
}

// apply writable false to a single property

Object.defineProperty(stateInfo, 'formation', {
    writable: false
});

stateInfo.formation = 'November 10 1956';
stateInfo.area = 20000;

console.log(stateInfo);

// seal - allows only to change existing properties

Object.seal(stateInfo);

stateInfo.population = 20;
stateInfo.area = 400000;
stateInfo.dams = 2;

console.log(stateInfo);

// freeze - freezes entire object

Object.freeze(stateInfo);

stateInfo.population = 30;
stateInfo.area = 600000;

console.log(stateInfo);


//ES6 Object Features

var num1 = 5;

var obj4 = {
    num1: num1,
    num2: 10
}

var obj5 = {
    num1,
    num2: 10
}

console.log(obj4);
console.log(obj5);

let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person1.fullName());

let objProto = {
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: 'Joe',
    lastName: 'Doe'
}

Object.setPrototypeOf(person2, objProto);

console.log(person2.fullName());

const obj6 = {
    a: 2
}

const obj7 = {
    b: 1
}

const obj8 = {
    c: 12
}

const obj9 = {
    d: 30
}

Object.assign(obj6, obj7, obj8, obj9);

console.log(obj6);


// Method Chaining Example

let student = {
    fname: 'phaneendra',
    lname: 'dvln',
    scores: [],
    total: 0,
    average: 0,
    addScore(val) {
        this.scores.push(val);
        return this;
    },
    getTotal() {
        this.total = this.scores.reduce((x, y) => {
            return x + y;
        }, 0);
        return this;
    },
    getAverage() {
        this.average = this.total / this.scores.length;
        return this;
    }
}

// to use method chaining the method has to return this in the above example

student.addScore(100).addScore(80).addScore(95).getTotal().getAverage();

console.log(student);

//IIFEs

function mulDec(num) {
    console.log(num * num);
}

(function (num) {
    console.log(num * num);
}(6));

let mulExp = function (num) {
    console.log(num * num);
}

mulDec(4);
mulExp(8);

let add = function (num1, num2) {
    return num1 + num2;
}(1, 10);

let mul = function () {
    return add * add;
}();

(function () {
    console.log(mul);
}());


// Closure Example 1

var func1 = function () {
    let a = 5;
    let b = 10;

    let func2 = function () {
        console.log(a + b);
    }

    setTimeout(func2, 3000);
}

func1();

// Closure Example 2

(function () {
    let cnt = 0;
    let btn1 = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');

    let print = function () {
        console.log(cnt);
    }

    btn1.addEventListener('click', function () {
        cnt++;
        print();
    });

    btn2.addEventListener('click', function () {
        cnt++;
        print();
    });
})();


// JSON Stringify - convert object to JSON / Parse - convert JSON to Object

var strName = '{"name": "John"}';

var strNameToObj = JSON.parse(strName);

console.log(strNameToObj);

var objToJsonObj = JSON.stringify(strNameToObj);

console.log(objToJsonObj);


// Http Request Example1

var QUIZAPP = (function (app) {

    let jsonObj = {};

    let loadJSON = function (path) {
        let xobj = new XMLHttpRequest();

        xobj.overrideMimeType('application/json');

        xobj.open('GET', path);

        xobj.onreadystatechange = function () {
            if (xobj.readyState === 4) {
                app.jsonObj = JSON.parse(xobj.responseText);
            }
        }

        xobj.send(null);
    }

    app.jsonObj = jsonObj;
    app.loadJSON = loadJSON;
    return app;
})(QUIZAPP || {});


// setting prototype of objects

let State = function(name, capital) {
    this.stateName = name;
    this.stateCapital = capital;
}

let stateProto = {
    getName: function() {
        return this.stateName + ' ' + this.stateCapital;
    }
}

State.prototype = stateProto;
State.prototype.constructor = State;

let state1 = new State('Telanagana', 'Hyderabad');

console.log(state1.getName());

let state2 = Object.create(stateProto);
state2.stateName = 'Karnataka';
state2.stateCapital = 'Bengaluru'

console.log(state2.getName());

let state3 = {
    stateName: 'Haryana',
    stateCapital: 'Chandigarh'
}

Object.setPrototypeOf(state3, stateProto);

console.log(state3.getName());
