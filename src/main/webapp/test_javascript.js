

console.log("Hello world!");

// ES 5
var x = 1;

// ES 6
let  z= 1;
const y = 1;

let variablesOne = 5;
let variableTwo = 6;

console.log("variableOne: " + variablesOne + " - variableTwo: " + variableTwo);

let variableThree = variablesOne + variableTwo;
variableThree += 1;
variableThree++;
console.log(variableThree);

// def addNumbers(a,b):
//int addNumbers(int a, int b){}
// define function in JS
function addNumbers(a, b){
    return a + b;
}

console.log("add numbers: " + addNumbers(22, 32));

x = addNumbers(5,6);

// function pointers
let otherFunction = addNumbers;
x = otherFunction(22, 56);
console.log("x: " + x);

// JSON
let personA = {
                name: "Alyssa",
                email: "alyssa.pingel@my.simpson.edu"
                };
console.log("name: " + personA.name);
console.log("email: " + personA.email);
console.log(personA['name']);

// ES6 Class
class PersonB {
    constructor() {
        this.name = "";
        this.email = "";
    }
    fullName(){
        return this.name + " " + this.email;
    }
}

let personB = new PersonB();
personB.name = "Mary";
personB.email = "mary@my.simpson.edu";

console.log("PersonB name: " + personB.name);
console.log(personB.email);
console.log(personB.fullName());

// ES5 Class Old School
var personD =
    {
        firstName: "Fred",
        lastName: "Jones",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },
        email: "fred.jones@simpson.edu"
    };
console.log(personD.fullName());

// Loop

//python --  for i in range(10)
//           print(i)
for (let i = 0; i < 10; i++){
    console.log(i);
}

// Loop Array
let colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++)
{
    console.log(colors[i]);
}

// Loop through fields in an object
let personE = {name: "Alyssa", email: "alyssa.pingel@my.simpson.edu"};
//loop through JSON object as For Each loop
for (let field in personE){
    console.log(field + " = " + personE[field]);
}

// Expressions
let a = 5;
let b = 6;
if (a == b){
    console.log("x==y");
}
else {
    console.log("x != y");
}

// comparing strings
// use === not ==
a = "Alyssa";
b = "Alyssa";
if (a === b){
    console.log("a===b");
}
else {
    console.log("a != b");
}

// Convert to String
a = 5;
b = 6;
z = a + b;
console.log(z);

z = a.toString() + b.toString();
console.log(z);

// Convert to a number
a = "5";
b = "6";
z = Number(a) + Number(6);
console.log(z);