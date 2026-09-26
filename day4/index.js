//check whether is old enough to drive
let age = prompt("Enter your age:");


if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}

//compare your age with my age

let myAge = 25;
let yourAge = prompt("Enter your age:");

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me`);
} else if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} years older than you`);
} else {
  console.log("We are the same age");
}

//compare a and b using if else and the ternary operator

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

//check whether a number is even or odd 

let number = prompt("Enter a number:");

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

//level 2

//give a grade based on student's score

let score = prompt("Enter your score:");

if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score <= 79) {
  console.log("B");
} else if (score >= 60 && score <= 69) {
  console.log("C");
} else if (score >= 50 && score <= 59) {
  console.log("D");
} else if (score >= 0 && score <= 49) {
  console.log("F");
} else {
  console.log("Invalid score");
}

//identify the season based on the month

let month = prompt("Enter a month:");

if (month === "September" , month === "October" , month === "November") {
  console.log("Autumn");
} else if (month === "December" , month === "January" , month === "February") {
  console.log("Winter");
} else if (month === "March" , month === "April" , month === "May") {
  console.log("Spring");
} else if (month === "June" , month === "July" , month === "August") {
  console.log("Summer");
} else {
  console.log("Invalid month");
}

//check whether a day is a weekend or a working day

let day = prompt("What is the day today?");

day = day.toLowerCase();

if (day === "saturday" , day === "sunday") {
  console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`);
} else if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "friday"
) {
  console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`);
} else {
  console.log("Invalid day.");
}

//level 3

//find the number of days in a month,accounting for leap years in February

let month1 = prompt("Enter a month:");
month = month.toLowerCase();

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`);
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`);
} else if (month === "february") {
  console.log("February has 28 days.");
} else {
  console.log("Invalid month.");
}


let month2 = prompt("Enter a month:");
let year = prompt("Enter a year:");

month = month.toLowerCase();

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`);
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`);
} else if (month === "february") {
  if (year % 4 === 0) {
    console.log("February has 29 days.");
  } else {
    console.log("February has 28 days.");
  }
} else {
  console.log("Invalid month.");
}