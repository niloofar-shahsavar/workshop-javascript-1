let fruit = "Apple";
fruit = "orange";
console.log("The fruit is", fruit);

let age = 33;
age += 3.5;
console.log(age);

let year = 2023;
year -= 1969;
console.log(year);

let number = 65;
number /= 240;
console.log(number);

let myVar = 0.2708;
myVar *= 100;
console.log(myVar);

console.log("niloofar shahsavar".toUpperCase());

const text = "    Remove whitespace   ";
console.log(text.trim());

console.log("How many characters long is this string?".length);

const carSpeed = 85;

if (carSpeed > 100) {
  console.log("Slow down!");
} else {
  console.log("carry on!");
}

const wordCount = 0;

if (wordCount == 0) {
  console.log("Get writing");
}

const currentTemperature = 15;
const goneForARun = false;

if (currentTemperature > 10 && !goneForARun) {
  console.log("go for run");
}

const fName = "Mary";
const namelenght = fName.length;

if (namelenght > 10) {
  console.log("You have a long name!");
} else if (namelenght < 5) {
  console.log("You have a short name");
} else {
  console.log("You have a medium length name!");
}

const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};
console.log(printCurrentTime());

function printMittnamn() {
  console.log("Niloofar");
}
printMittnamn();
printMittnamn();

function printGreeting(name) {
  console.log("Hello " + name);
}
printGreeting("Bob");
printGreeting("Sue");

function multiply(myNumber, myNumber2) {
  return myNumber * myNumber2;
}
console.log(multiply(2, 2));
console.log(multiply(100, 4));

function warmEnough(temperature) {
  return temperature > 10;
}

if (warmEnough(11)) {
  console.log("Go for a run!");
} else {
  console.log("stay home");
}
