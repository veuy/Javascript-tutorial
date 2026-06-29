# 📘 Module 1: JavaScript Fundamentals
## Variables, Data Types, Operators & Type Coercion

---

> **Estimated time to complete:** 2 weeks
> **Prerequisites:** None — this is where everyone starts!

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

- ✅ Declare variables using `let`, `const`, and `var` — and **understand the differences**
- ✅ Identify and use the 7 primitive data types in JavaScript
- ✅ Perform mathematical and logical operations
- ✅ Understand type coercion (both implicit and explicit)
- ✅ Write basic JavaScript expressions and statements
- ✅ Debug simple code using `console.log()`

---

## 📖 Chapter 1: What is JavaScript?

JavaScript (often called **JS**) is the **programming language of the web**. It runs in every web browser and is used to make web pages interactive.

### Think of it like this:

| Analogy | Explanation |
|---------|-------------|
| 🏠 **HTML** = The structure (walls, roof, doors) | Defines what's on the page |
| 🎨 **CSS** = The decoration (paint, furniture) | Makes it look nice |
| 🕹️ **JS** = The electricity & plumbing | Makes things *work* & respond |

JavaScript powers:
- Dynamic content updates (like Facebook feeds)
- Interactive forms & buttons
- Games, animations, maps
- Entire web apps (Gmail, Google Docs, Trello)

---

## 📖 Chapter 2: Your First JavaScript

JavaScript code is executed **line by line, top to bottom**.

Open the **JS Playground** (`index.html` in the project folder), and type this:

```javascript
console.log("Hello, World!");
```

Click **Run** (or press `Ctrl+Enter`).

### 🔍 What happened?

- `console` is a built-in **object** provided by the browser
- `.log()` is a **method** (a function attached to an object) that prints output
- `"Hello, World!"` is a **string** — a piece of text wrapped in quotes

> 🧠 **Memory Aid:** Think of `console.log()` as a "shout into a microphone" — it announces whatever you tell it to the **console** (the output panel).

---

## 📖 Chapter 3: Variables — Storing Data

A **variable** is like a labeled box where you store a value. You give it a name, and JavaScript remembers what's inside.

### 3 ways to declare variables:

```javascript
// 1. let — modern, changeable variable (PREFERRED)
let age = 25;
age = 26;  // ✅ Can be updated

// 2. const — constant, CANNOT be changed
const birthYear = 1998;
// birthYear = 1999;  // ❌ Error! Cannot reassign a const

// 3. var — old way, avoid when possible (but you'll see it in old code)
var name = "Alice";
name = "Bob";  // ✅ Can be updated (but var has tricky behavior)
```

### 🧪 Try it in the Playground:
```javascript
let myName = "Alex";
const myBirthYear = 2005;
var myCity = "Toronto";

console.log(myName);        // Alex
console.log(myBirthYear);   // 2005
console.log(myCity);        // Toronto

// myBirthYear = 2006;  // ❌ Uncomment this line to see the error!
```

### 🛑 Common Mistakes Beginners Make:

```javascript
// Mistake 1: Using undefined variable
console.log(notDefined);  // ❌ ReferenceError

// Mistake 2: Reassigning a const
const pi = 3.14;
// pi = 3;  // ❌ TypeError: Assignment to constant variable

// Mistake 3: Wrong naming
let 2ndPlace = "John";    // ❌ Can't start with a number
let my-variable = "test"; // ❌ Hyphens not allowed (use myVariable instead)
let let = "bad";          // ❌ 'let' is a reserved keyword
```

### ✅ Variable Naming Rules:
- Must start with a **letter**, `_`, or `$`
- Cannot start with a **number**
- Can contain letters, numbers, `_`, and `$`
- Are **case-sensitive** (`myVar` ≠ `myvar`)
- Use **camelCase** for multi-word names: `myFirstName`

---

## 📖 Chapter 4: Data Types — The 7 Primitives

Every value in JavaScript has a **type**. Think of types as different "kinds" of data, like how in real life you have numbers, words, true/false questions, etc.

### The 7 Primitive Types:

| # | Type | Example | Description |
|---|------|---------|-------------|
| 1 | `number` | `42` | Integers & decimals |
| 2 | `string` | `"hello"` | Text (in quotes) |
| 3 | `boolean` | `true` / `false` | Yes/No values |
| 4 | `undefined` | `let x;` | Value not assigned yet |
| 5 | `null` | `let x = null;` | Intentional "nothing" |
| 6 | `bigint` | `9007199254740991n` | Really big numbers |
| 7 | `symbol` | `Symbol("id")` | Unique identifiers (advanced) |

### 🧪 See them in action:

```javascript
// NUMBER — both integers and decimals
let age = 30;
let price = 19.99;
let temperature = -5;

console.log(typeof age);        // "number"
console.log(typeof price);      // "number"

// STRING — text, must be in quotes
let firstName = "Jane";
let lastName = 'Doe';          // Single quotes work too
let greeting = `Hello ${firstName}`; // Backticks allow embedding (template literals)

console.log(typeof firstName);  // "string"

// BOOLEAN — true or false
let isLoggedIn = true;
let isGreater = 10 > 5;        // This will be true

console.log(typeof isLoggedIn); // "boolean"

// UNDEFINED — declared but not assigned
let futureVariable;
console.log(futureVariable);    // undefined
console.log(typeof futureVariable); // "undefined"

// NULL — explicitly "nothing"
let emptyBox = null;
console.log(emptyBox);         // null
console.log(typeof emptyBox);  // "object" ← This is a famous JS bug! Should be null
```

### 🧠 Deep Dive: Why `typeof null === "object"`?

This is a **historic bug** in JavaScript from 1996 that was never fixed (because fixing it would break too much existing code). Just remember: **null is a primitive, but typeof says "object"** — it's the one exception.

---

## 📖 Chapter 5: Operators — Doing Things With Data

### 5.1 Arithmetic Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13  (addition)
console.log(a - b);   // 7   (subtraction)
console.log(a * b);   // 30  (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1   (modulo / remainder)
console.log(a ** b);  // 1000 (exponent: 10³)
```

> 🧠 **Modulo (`%`) Trick:** `x % 2 === 0` means `x` is **even**. `x % 2 === 1` means `x` is **odd**.

### 5.2 Assignment Operators

```javascript
let x = 10;

x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x × 2 → 24
x /= 4;   // x = x ÷ 4 → 6
x %= 4;   // x = x % 4 → 2
x **= 3;  // x = x³ → 8
```

### 5.3 Comparison Operators

```javascript
console.log(5 == "5");    // true  (loose equality - checks value ONLY)
console.log(5 === "5");   // false (strict equality - checks value AND type)
console.log(5 != "5");    // false (loose inequality)
console.log(5 !== "5");   // true  (strict inequality)

console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 9);     // false
```

### ⚠️ IMPORTANT: Always use `===` and `!==`

**Never** use `==` or `!=` unless you have a specific reason. The loose equality operators do **type coercion** (automatic type conversion), which can lead to unexpected results:

```javascript
console.log(false == 0);      // true  ← Makes sense? Not really!
console.log("" == 0);         // true  ← An empty string equals zero?
console.log(null == undefined); // true  ← These are different!
console.log(false === 0);     // false ← Correct! Different types
```

### 5.4 Logical Operators

```javascript
// AND (&&) — both must be true
console.log(true && true);    // true
console.log(true && false);   // false

// OR (||) — at least one must be true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) — inverts the boolean
console.log(!true);           // false
console.log(!false);          // true
```

#### Real-world example:
```javascript
let age = 20;
let hasLicense = true;

// Can they drive?
let canDrive = age >= 16 && hasLicense;
console.log(canDrive);  // true (both conditions met)

// Can they get a senior discount?
let isSenior = age >= 65;
let hasCoupon = false;
let getsDiscount = isSenior || hasCoupon;
console.log(getsDiscount);  // false (neither is true)
```

---

## 📖 Chapter 6: Type Coercion — The Automatic Type Change

JavaScript sometimes **automatically converts** one data type to another. This is called **type coercion**.

### Implicit Coercion (JS does it automatically):

```javascript
// String + Number → String
console.log("5" + 3);    // "53"  (number becomes string)
console.log("Hello " + 42); // "Hello 42"

// Other operators with strings → Number
console.log("5" - 3);    // 2  (string becomes number)
console.log("10" * "2"); // 20  (both become numbers)
console.log("10" / "2"); // 5

// Boolean → Number
console.log(true + 1);   // 2  (true becomes 1)
console.log(false + 1);  // 1  (false becomes 0)
```

### Explicit Coercion (You control it):

```javascript
// String → Number
let num = Number("42");
console.log(num);        // 42
console.log(typeof num); // "number"

let notANum = Number("hello");
console.log(notANum);    // NaN (Not a Number)

// Number → String
let str = String(123);
console.log(str);        // "123"
console.log(typeof str); // "string"

// Anything → Boolean
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("hi")); // true
```

### 🧠 Mental Model: Truthy vs Falsy Values

When JavaScript checks if something is `true` or `false` (e.g., in an `if` statement), it treats these values as **falsy** (they become `false`):

| Falsy Values | Why They're Falsy |
|--------------|-------------------|
| `false` | The boolean false itself |
| `0` | Zero |
| `""` or `''` | Empty string |
| `null` | No value |
| `undefined` | Not assigned |
| `NaN` | Not a valid number |

**Everything else** is **truthy** (becomes `true`):

```javascript
// All of these are TRUTHY
Boolean("hello")     // true
Boolean(42)          // true
Boolean(-1)          // true
Boolean(" ")         // true (space is not empty!)
Boolean([])          // true (empty array)
Boolean({})          // true (empty object)
Boolean(Infinity)    // true
```

---

## 📖 Chapter 7: Template Literals (Modern Strings)

Instead of clunky string concatenation with `+`, use **template literals** with backticks `` ` ``:

```javascript
let name = "Sarah";
let age = 28;

// Old way (concatenation)
console.log("My name is " + name + " and I am " + age + " years old.");

// New way (template literal) ← MUCH CLEANER
console.log(`My name is ${name} and I am ${age} years old.`);

// You can put ANY expression inside ${}
console.log(`Next year I will be ${age + 1}.`);
console.log(`In 5 years I will be ${age + 5}.`);
```

---

## ✏️ Practice Exercises

### Exercise 1: Variable Declaration
```javascript
// Declare a variable called 'favoriteColor' using let and assign your favorite color
// Declare a variable called 'daysInWeek' using const and assign 7
// Try to reassign daysInWeek — what happens?

// 👇 Write your code here
```

### Exercise 2: Data Types
```javascript
// Create these variables and use console.log() to see their types:
// 1. A number (any number)
// 2. A string (your name)
// 3. A boolean (are you a student?)
// 4. undefined (declare without assigning)
// 5. null (explicitly empty)

// 👇 Write your code here
```

### Exercise 3: Arithmetic
```javascript
// Calculate the following:
// 1. The area of a rectangle (width × height) where width=8, height=5
// 2. Check if 17 is even or odd using modulo (%)
// 3. Convert 100 degrees Fahrenheit to Celsius: (F - 32) × 5/9

// 👇 Write your code here
```

### Exercise 4: Type Coercion
```javascript
// Guess the output BEFORE running. Then run and check!

console.log("10" + 5);
console.log("10" - 5);
console.log("10" * "2");
console.log("ten" - 5);
console.log(true + true + true);
console.log(false + 10);
console.log(5 + null);
console.log(5 + undefined);

// 👇 Write your guesses here (as comments), then run
```

### Exercise 5: Comparison
```javascript
// What will these print? Write your guess first!

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);
```

### Exercise 6: Logical Operators
```javascript
// You're building a club entry system
// Rules: Must be 18+ AND have an ID
// But: If they have a VIP pass, they can enter regardless of age

let age = 17;
let hasID = true;
let hasVIP = true;

// Write the expression that checks if they can enter
// 👇 Write your code here
```

---

## 🏆 Mini-Challenge: The Tip Calculator

Create a tip calculator that:
1. Has a variable for the **bill amount** (e.g., $47.50)
2. Has a variable for the **tip percentage** (e.g., 15% = 0.15)
3. Calculates the **tip amount**
4. Calculates the **total bill** (original + tip)
5. Prints all three values nicely using template literals

```javascript
// 👇 Your tip calculator here
```

**Expected output format:**
```
Bill: $47.50
Tip (15%): $7.13
Total: $54.63
```

---

## ⚠️ Common Pitfalls (Read These!)

1. **Forgetting to declare a variable:** `x = 5;` (without `let`/`const`) creates a **global variable** — bad practice!
2. **Mixing up `=` and `===`:** `=` is assignment, `===` is comparison. `if (x = 5)` is a common bug!
3. **Case sensitivity:** `Console.log()` won't work (capital C) — must be `console.log()`
4. **Unclosed strings:** `"hello` (missing closing quote) causes a syntax error
5. **NaN confusion:** `NaN === NaN` is `false`! Use `isNaN(value)` to check

---

## 📚 Summary

| Concept | Key Takeaway |
|---------|--------------|
| Variables | Use `let` for changeable, `const` for constants. Avoid `var`. |
| Data Types | 7 types: number, string, boolean, undefined, null, bigint, symbol |
| Operators | Arithmetic (`+ - * / % **`), Comparison (`=== !== > <`), Logical (`&& \|\| !`) |
| Type Coercion | JS auto-converts types. Use `===` to avoid surprises. |
| Template Literals | Use backticks `` ` `` and `${}` for cleaner strings |

---

## 🔜 Next Up: Module 2 — Control Flow

You'll learn how to make decisions in code using `if/else` statements and how to repeat tasks with loops!

> **Before moving on:** Make sure you can confidently:
> - Declare variables with `let` and `const`
> - Name the 7 primitive types
> - Use `===` for comparison
> - Use template literals
> - Explain truthy vs falsy values

---

*📝 Open `exercises/01-exercises.js` for more practice problems with solutions!*