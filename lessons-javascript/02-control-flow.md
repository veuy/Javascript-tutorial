# 📘 Module 2: Control Flow
## Conditionals, Loops & Program Logic

---

> **Estimated time to complete:** 2 weeks
> **Prerequisites:** Module 1 (Variables, Data Types, Operators)

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

- ✅ Make decisions in code using `if`, `else if`, and `else`
- ✅ Use the ternary operator for concise conditions
- ✅ Write `switch` statements for multiple conditions
- ✅ Repeat code with `for` loops, `while` loops, and `do...while`
- ✅ Control loops with `break` and `continue`
- ✅ Combine loops and conditionals to solve real problems

---

## 📖 Chapter 1: The `if` Statement — Making Decisions

Your code often needs to make choices. The `if` statement is how you tell JavaScript:

> **"IF this condition is true, THEN run this code."**

```javascript
let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day! 🥵");
}
```

### 🔍 How it works:

- The condition `temperature > 25` is evaluated
- If it's `true`, the code inside `{ }` runs
- If it's `false`, the code is skipped

### The Full Chain: `if` / `else if` / `else`

```javascript
let temperature = 15;

if (temperature > 30) {
  console.log("It's boiling! 🥵");
} else if (temperature > 20) {
  console.log("It's warm and pleasant 😊");
} else if (temperature > 10) {
  console.log("It's a bit chilly 🥶");
} else {
  console.log("It's freezing! ❄️");
}

// Output: "It's a bit chilly 🥶"
```

> 🧠 **Mental Model:** Think of `if/else if/else` like a **sorting machine**. The first condition that matches "catches" the value, and everything after is skipped.

### 🧪 Try this in the Playground:

```javascript
let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Score: ${score} → Grade: ${grade}`);
// Output: Score: 85 → Grade: B
```

### ⚠️ Order Matters!

```javascript
let num = 15;

// ❌ WRONG: The first condition catches everything >= 10
if (num >= 10) {
  console.log("Between 10 and 20");
} else if (num > 5 && num < 15) {
  console.log("This will never run!");
}

// ✅ CORRECT: Most specific conditions first
if (num > 5 && num < 15) {
  console.log("Between 5 and 15 (exclusive)");
} else if (num >= 10) {
  console.log("10 or more");
}
```

### Common Patterns:

```javascript
// Checking multiple conditions
let age = 17;
let hasPermission = true;

if (age >= 18 || hasPermission) {
  console.log("Access granted ✅");
} else {
  console.log("Access denied ❌");
}

// Using ! (NOT) to invert
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in first");
}

// Checking if a variable exists (truthy/falsy)
let username = "";
if (username) {
  console.log(`Welcome, ${username}!`);
} else {
  console.log("No username provided");
}
```

---

## 📖 Chapter 2: The Ternary Operator — Shorthand `if/else`

For simple true/false decisions, the **ternary operator** (`? :`) is a concise alternative:

```javascript
// Long form:
let age = 20;
let message;
if (age >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}

// Ternary (short form):
let message2 = age >= 18 ? "Adult" : "Minor";

console.log(message2); // "Adult"
```

### Structure:

```javascript
condition ? valueIfTrue : valueIfFalse
```

### More examples:

```javascript
let isRaining = false;
let activity = isRaining ? "Stay inside ☕" : "Go outside 🌳";
console.log(activity); // "Go outside 🌳"

let score = 75;
let result = score >= 60 ? "Pass ✅" : "Fail ❌";
console.log(result); // "Pass ✅"

// You can even embed in template literals!
let hour = 14;
console.log(`Good ${hour < 12 ? "morning" : "afternoon"}!`);
```

### ⚠️ When NOT to use ternary:
- When conditions are complex (use `if/else` for readability)
- When nesting ternaries (it becomes confusing)

```javascript
// ❌ BAD: Nested ternary (hard to read)
let x = 10;
let result = x > 5 ? (x > 10 ? "big" : "medium") : "small";

// ✅ BETTER: Use if/else
let result2;
if (x > 5) {
  result2 = x > 10 ? "big" : "medium";
} else {
  result2 = "small";
}
```

---

## 📖 Chapter 3: The `switch` Statement

When you have **many specific values** to check, `switch` is cleaner than a long `if/else if` chain:

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // "Wednesday"
```

### 🔍 Key Points:

- `switch` compares using **strict equality** (`===`)
- `break` prevents "fall-through" (executing the next case)
- `default` runs if no case matches

### Fall-Through (Intentional):

Sometimes you **want** multiple cases to share code:

```javascript
let fruit = "apple";
let category;

switch (fruit) {
  case "apple":
  case "pear":
  case "peach":
    category = "pome or stone fruit";
    break;
  case "banana":
  case "mango":
    category = "tropical";
    break;
  default:
    category = "unknown";
}

console.log(`${fruit} is a ${category} fruit`);
// Output: apple is a pome or stone fruit
```

---

## 📖 Chapter 4: The `for` Loop — Repeat Known Times

A loop lets you run the same code **multiple times**. The `for` loop is used when you know **how many times** to repeat.

### Structure:

```javascript
for (initialization; condition; increment) {
  // Code to repeat
}
```

### Counting from 1 to 5:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
```

### 🔍 Breaking it down:

| Part | Example | What happens |
|------|---------|--------------|
| `initialization` | `let i = 1` | Runs **once** at the start |
| `condition` | `i <= 5` | Checked **before each iteration** |
| `increment` | `i++` | Runs **after each iteration** |

**Execution order:**
1. `let i = 1` (once)
2. Check: `i <= 5` → `true` → run code
3. `i++` (i becomes 2)
4. Check: `i <= 5` → `true` → run code
5. ...repeat until `i <= 5` is `false`

### Common Patterns:

```javascript
// Count down
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off! 🚀");

// Step by 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}

// Sum numbers 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Sum: ${sum}`); // 5050
```

---

## 📖 Chapter 5: The `while` Loop — Repeat Until False

Use `while` when you don't know how many times to repeat — you just keep going **while a condition is true**.

```javascript
let count = 1;

while (count <= 5) {
  console.log(`Count: ${count}`);
  count++;
}
// Same output as the for loop above
```

### ⚠️ INFINITE LOOP DANGER!

If the condition **never becomes false**, the loop runs forever and crashes your browser!

```javascript
// ❌ INFINITE LOOP — doesn't reset or change x
let x = 1;
while (x < 5) {
  console.log(x);
  // Missing: x++  ← Loop runs forever!
}
```

**Always ensure the condition will eventually become `false`!**

### Real-world example: Guessing Game

```javascript
let secretNumber = 7;
let guess = 0;
let attempts = 0;

while (guess !== secretNumber) {
  guess = Math.floor(Math.random() * 10) + 1;
  attempts++;
  console.log(`Attempt ${attempts}: Guessed ${guess}`);
}

console.log(`🎉 Found it in ${attempts} tries!`);
```

---

## 📖 Chapter 6: `do...while` — Run At Least Once

`do...while` guarantees the code runs **at least once**, even if the condition is false:

```javascript
let i = 10;

do {
  console.log(`This runs even though ${i} > 5 is false`);
  i++;
} while (i > 5 && i < 5);

// Output: "This runs even though 10 > 5 is false"
// (because the condition is checked AFTER the first run)
```

### When to use it:
- When you need the user to input something at least once
- When initialization must happen inside the loop

---

## 📖 Chapter 7: `break` and `continue`

### `break` — Exit the loop immediately

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5! Stopping...");
    break;  // ← Exits the loop
  }
  console.log(i);
}
// Output: 1, 2, 3, 4, "Found 5! Stopping..."
```

### `continue` — Skip to the next iteration

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // ← Skip even numbers
  }
  console.log(i); // 1, 3, 5, 7, 9 (only odds)
}
```

> 🧠 **Mental Model:**
> - `break` = "I'm done, get me out of here!"
> - `continue` = "Skip this one, move to the next"

---

## 📖 Chapter 8: Nested Loops

Loops inside loops! Used for grids, tables, pairs, etc.

```javascript
// Multiplication table for 1-3
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
  console.log("---");  // separator
}
```

**Output:**
```
1 × 1 = 1
1 × 2 = 2
1 × 3 = 3
---
2 × 1 = 2
2 × 2 = 4
2 × 3 = 6
---
3 × 1 = 3
3 × 2 = 6
3 × 3 = 9
---
```

### Drawing shapes with nested loops:

```javascript
// Draw a right triangle
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
// Output:
// *
// **
// ***
// ****
// *****
```

---

## ✏️ Practice Exercises

### Exercise 1: Age Classifier
```javascript
// Write a program that:
// 1. Has a variable 'age'
// 2. Classifies the person as:
//    - "Infant" (0-1)
//    - "Child" (2-12)
//    - "Teen" (13-19)
//    - "Adult" (20-64)
//    - "Senior" (65+)
// 3. Prints the classification

// 👇 Write your code here
```

### Exercise 2: Even or Odd Loop
```javascript
// Write a for loop that goes from 1 to 20
// For each number, print whether it's even or odd
// Example: "1 is odd", "2 is even", "3 is odd", etc.

// 👇 Write your code here
```

### Exercise 3: FizzBuzz (Classic Challenge!)
```javascript
// Write a loop from 1 to 30
// - If the number is divisible by 3, print "Fizz"
// - If divisible by 5, print "Buzz"
// - If divisible by both 3 AND 5, print "FizzBuzz"
// - Otherwise, print the number itself

// 👇 Write your code here
```

### Exercise 4: Sum of Multiples
```javascript
// Calculate the sum of all numbers from 1 to 1000
// that are divisible by either 3 or 5
// Hint: use % (modulo) and || (OR)

// 👇 Write your code here
```

### Exercise 5: Simple ATM
```javascript
// Create a simple ATM simulation
// Start with a balance of $1000
// Have a variable for withdraw amount
// Check if withdrawal is possible (sufficient funds)
// Check if withdrawal is a multiple of $20
// Print appropriate messages

let balance = 1000;
let withdrawAmount = 140;

// 👇 Write your code here
```

### Exercise 6: Password Validator (with Loop)
```javascript
// Create a password validator that checks:
// - Length must be at least 8 characters
// - Must contain at least one number (loop through characters to check)
// - Must contain at least one uppercase letter
// Use a loop to check each character!

let password = "MyPass123";

// 👇 Write your code here
```

---

## 🏆 Mini-Challenge: The Number Guessing Game

Build a number guessing game:

1. Generate a random number between 1 and 100
2. Let the user guess (you can just change a variable for each guess)
3. Tell them if their guess is too high, too low, or correct
4. Keep track of how many attempts
5. When they guess correctly, show a congratulatory message with the attempt count

```javascript
// 💡 Use Math.floor(Math.random() * 100) + 1 for random numbers

// 👇 Your guessing game here
```

**Bonus Challenge:** Make it a loop that continues until they guess correctly!

---

## ⚠️ Common Pitfalls

1. **Using `=` instead of `===` in conditions:** `if (x = 5)` assigns 5 to x (which is truthy!) instead of comparing
2. **Infinite loops:** Forgetting to increment in `while` loops
3. **Off-by-one errors:** `for (let i = 1; i < 5; i++)` runs 4 times, not 5
4. **Missing `break` in switch:** Falls through to the next case unintentionally
5. **Semicolon after `for`:** `for (...); { }` — the semicolon ends the loop, so `{ }` runs once!

---

## 📚 Summary

| Concept | Key Takeaway |
|---------|--------------|
| `if/else` | Makes decisions based on boolean conditions |
| Ternary | `condition ? ifTrue : ifFalse` — concise for simple cases |
| `switch` | Clean multiple-value comparison with `break` |
| `for` loop | When you know the count (`let i = 0; i < n; i++`) |
| `while` loop | When you don't know the count |
| `do...while` | When code must run at least once |
| `break` | Exit loop immediately |
| `continue` | Skip to next iteration |

---

## 🔜 Next Up: Module 3 — Functions

You'll learn how to package reusable blocks of code into functions, understand scope, and write cleaner, more organized programs!

---

*📝 Open `exercises/02-exercises.js` for more practice problems with solutions!*