/*
This is a faulty calculator using JavaScript.

It takes two numbers as input from the user.
It performs wrong operations as follows:

+ => -
* => +
- => /
/ => **

It performs wrong operations 10% of the time.
*/

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let op = prompt("Enter operation (+, -, *, /):");

// Generate random number between 0 and 1
let random = Math.random();

if (random < 0.1) {
    // Faulty behavior (10%)
    console.log("⚠ Faulty calculation");

    if (op === "+") console.log(a - b);
    else if (op === "*") console.log(a + b);
    else if (op === "-") console.log(a / b);
    else if (op === "/") console.log(a ** b);
    else console.log("Invalid operator");
} else {
    // Correct behavior (90%)
    console.log("✅ Correct calculation");

    if (op === "+") console.log(a + b);
    else if (op === "*") console.log(a * b);
    else if (op === "-") console.log(a - b);
    else if (op === "/") console.log(a / b);
    else console.log("Invalid operator");
}
