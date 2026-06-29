// ============================================
// 📘 EXERCISES: Module 1 — Fundamentals
// ============================================
// Try to solve these BEFORE looking at the solutions!
// ============================================

// ---------- EXERCISE 1: Variable Declaration ----------
// Declare:
// 1. A variable called 'favoriteColor' using let (your favorite color)
// 2. A constant called 'daysInWeek' with value 7
// 3. Try to reassign daysInWeek — what happens?

// 👇 YOUR CODE HERE:

console.log("--- Exercise 1 ---");
// let favoriteColor = ...
// const daysInWeek = ...
// daysInWeek = 8; // ← Try uncommenting this
// console.log(favoriteColor, daysInWeek);


// ---------- EXERCISE 2: Data Types ----------
// Create variables of each type and log them:
// number, string, boolean, undefined, null

// 👇 YOUR CODE HERE:

console.log("--- Exercise 2 ---");


// ---------- EXERCISE 3: Arithmetic ----------
// Calculate:
// 1. Area of rectangle (width=8, height=5)
// 2. Is 17 even or odd? (use %)
// 3. Convert 100°F to Celsius: (F - 32) × 5/9

// 👇 YOUR CODE HERE:

console.log("--- Exercise 3 ---");


// ---------- EXERCISE 4: Type Coercion ----------
// Guess the output BEFORE running:

console.log("--- Exercise 4 ---");
// console.log("10" + 5);
// console.log("10" - 5);
// console.log("10" * "2");
// console.log("ten" - 5);
// console.log(true + true + true);
// console.log(false + 10);
// console.log(5 + null);
// console.log(5 + undefined);


// ---------- EXERCISE 5: Comparison ----------
// Guess the output:

console.log("--- Exercise 5 ---");
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(0 == false);
// console.log(0 === false);
// console.log("" == false);
// console.log("" === false);
// console.log(null == undefined);
// console.log(null === undefined);


// ---------- EXERCISE 6: Logical Operators ----------
// Club entry: 18+ AND have ID, OR have VIP pass
let age = 17;
let hasID = true;
let hasVIP = true;

// 👇 Write the expression that checks if they can enter

console.log("--- Exercise 6 ---");


// ---------- 🏆 MINI-CHALLENGE: Tip Calculator ----------
// Bill: $47.50, Tip: 15%
// Calculate tip amount and total
// Print using template literals

// 👇 YOUR CODE HERE:

console.log("--- Tip Calculator ---");


// ============================================
// 🎯 SOLUTIONS (Check after you've tried!)
// ============================================

/*

--- Exercise 1 Solution ---
let favoriteColor = "blue";
const daysInWeek = 7;
// daysInWeek = 8;  // ❌ TypeError: Assignment to constant variable!

--- Exercise 2 Solution ---
let myNumber = 42;
let myString = "Hello";
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log(typeof myNumber);    // "number"
console.log(typeof myString);    // "string"
console.log(typeof myBoolean);   // "boolean"
console.log(typeof myUndefined); // "undefined"
console.log(typeof myNull);      // "object" (the famous bug!)

--- Exercise 3 Solution ---
let width = 8, height = 5;
console.log(`Area: ${width * height}`); // 40

let num = 17;
console.log(`${num} is ${num % 2 === 0 ? "even" : "odd"}`);

let f = 100;
let c = (f - 32) * 5/9;
console.log(`${f}°F = ${c.toFixed(1)}°C`); // 37.8°C

--- Exercise 4 Solution ---
"10" + 5 = "105"     (number → string)
"10" - 5 = 5         (string → number)
"10" * "2" = 20      (both → numbers)
"ten" - 5 = NaN      (can't convert "ten")
true + true + true = 3  (true = 1)
false + 10 = 10      (false = 0)
5 + null = 5         (null = 0)
5 + undefined = NaN  (undefined = NaN)

--- Exercise 5 Solution ---
5 == "5"         → true   (loose, type coerced)
5 === "5"        → false  (strict, different types)
0 == false       → true   (0 is falsy)
0 === false      → false  (number ≠ boolean)
"" == false      → true   (empty string is falsy)
"" === false     → false  (string ≠ boolean)
null == undefined → true  (loosely equal by spec)
null === undefined → false (different types!)

--- Exercise 6 Solution ---
let canEnter = (age >= 18 && hasID) || hasVIP;
console.log(`Can enter: ${canEnter}`); // true (VIP)

--- Tip Calculator ---
let bill = 47.50;
let tipPercent = 0.15;
let tip = bill * tipPercent;
let total = bill + tip;

console.log(`Bill: $${bill.toFixed(2)}`);
console.log(`Tip (${tipPercent * 100}%): $${tip.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);

*/