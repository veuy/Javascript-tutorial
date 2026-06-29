# 📘 Module 3: Functions
## Declaration, Parameters, Scope, and Closures

---

> **Estimated time to complete:** 2 weeks
> **Prerequisites:** Module 1 & 2 (Variables, Operators, Control Flow)

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

- ✅ Define and call functions using declarations, expressions, and arrow syntax
- ✅ Understand parameters vs. arguments
- ✅ Return values from functions
- ✅ Explain scope (global, function, block)
- ✅ Understand hoisting behavior
- ✅ Grasp the concept of closures
- ✅ Use higher-order functions (functions that take/return functions)

---

## 📖 Chapter 1: What is a Function?

A **function** is a reusable block of code that performs a specific task. Think of it like a **recipe**:

> You write the recipe once, then you can "call" it anytime you want to cook that dish.

```javascript
// 📝 DEFINE the function (write the recipe)
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

// 🏃 CALL the function (use the recipe)
greet(); // Hello, welcome to JavaScript!
greet(); // Hello, welcome to JavaScript!
greet(); // Hello, welcome to JavaScript!
```

### Why use functions?

| Reason | Without Functions | With Functions |
|--------|------------------|----------------|
| 📦 **Reusability** | Copy/paste code everywhere | Write once, call many times |
| 🧼 **Organization** | One giant messy script | Organized into clear tasks |
| 🐛 **Debugging** | Hard to find where bugs are | Test each function individually |
| 📖 **Readability** | Hard to understand intent | Function names explain what it does |

---

## 📖 Chapter 2: Function Declarations

The most common way to create a function:

```javascript
function functionName(parameters) {
  // code to run
  return value;  // optional
}
```

### Example: A Simple Function

```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello(); // "Hello!"
```

### Example: Function with Parameters

```javascript
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Alice"); // "Hello, Alice!"
greetPerson("Bob");   // "Hello, Bob!"
greetPerson("Charlie"); // "Hello, Charlie!"
```

> 🧠 **Mental Model:** Parameters are **placeholders** (variables) defined in the function. Arguments are the **actual values** you pass when calling.

### Example: Function with Return Value

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8

// You can use the return value directly
console.log(add(10, 20)); // 30
```

### 🔍 `return` is important!

```javascript
// ❌ Without return — returns undefined
function addWrong(a, b) {
  a + b;  // Calculates but doesn't return!
}
console.log(addWrong(5, 3)); // undefined

// ✅ With return — returns the result
function addRight(a, b) {
  return a + b;
}
console.log(addRight(5, 3)); // 8
```

> **`return`** stops the function immediately and sends a value back. Any code after `return` is ignored!

```javascript
function test() {
  return "Done!";
  console.log("This never runs"); // ❌ Dead code
}

console.log(test()); // "Done!"
```

---

## 📖 Chapter 3: Parameters & Arguments — Deep Dive

### Multiple Parameters

```javascript
function introduce(name, age, city) {
  console.log(`I'm ${name}, ${age} years old, from ${city}.`);
}

introduce("Alice", 25, "New York");
// "I'm Alice, 25 years old, from New York."
```

### Default Parameters (ES6)

If you don't pass an argument, it's `undefined` by default. You can set defaults:

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Alice");    // "Hello, Alice!"
greet();           // "Hello, Guest!"  ← uses default
```

```javascript
function createUser(name, role = "user", isActive = true) {
  console.log(`Name: ${name}, Role: ${role}, Active: ${isActive}`);
}

createUser("Alice");               // Name: Alice, Role: user, Active: true
createUser("Bob", "admin");        // Name: Bob, Role: admin, Active: true
createUser("Charlie", "user", false); // Name: Charlie, Role: user, Active: false
```

### The `arguments` Object & Rest Parameters

```javascript
// Old way: arguments object (array-like)
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Modern way: Rest parameters (...)
function sumAllModern(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAllModern(1, 2, 3, 4, 5)); // 15
```

---

## 📖 Chapter 4: Function Expressions

A function can also be stored in a variable:

```javascript
// Function Expression
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // "Hello, Alice!"
```

### Key Difference: Hoisting

**Function declarations** are hoisted (moved to the top). **Function expressions** are NOT.

```javascript
// ✅ This works — declaration is hoisted
sayHi();
function sayHi() {
  console.log("Hi!");
}

// ❌ This doesn't work — expression is NOT hoisted
sayBye();
const sayBye = function() {
  console.log("Bye!");
};
// ReferenceError: Cannot access 'sayBye' before initialization
```

> 🧠 **Mental Model:** Hoisting = JavaScript "lifts" function declarations to the top of the file before running. Think of it like reading the whole recipe before you start cooking.

---

## 📖 Chapter 5: Arrow Functions (ES6)

A shorter syntax for writing functions:

```javascript
// Regular function
const add1 = function(a, b) {
  return a + b;
};

// Arrow function
const add2 = (a, b) => {
  return a + b;
};

// Even shorter — implicit return (no {} needed)
const add3 = (a, b) => a + b;

console.log(add1(2, 3)); // 5
console.log(add2(2, 3)); // 5
console.log(add3(2, 3)); // 5
```

### Arrow Function Patterns:

```javascript
// 0 parameters
const sayHello = () => console.log("Hello!");

// 1 parameter — parentheses optional
const square = x => x * x;

// 2+ parameters — parentheses required
const multiply = (a, b) => a * b;

// Multi-line — need {} and explicit return
const describe = (name, age) => {
  const message = `${name} is ${age} years old.`;
  return message;
};
```

### ⚠️ Arrow Functions and `this`

Arrow functions don't have their own `this`. They inherit `this` from the surrounding scope. This is great for callbacks but can cause issues in methods.

```javascript
const person = {
  name: "Alice",
  // ❌ Arrow function — 'this' doesn't refer to person
  greetArrow: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
  // ✅ Regular function — 'this' refers to person
  greetRegular: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

person.greetArrow();   // "Hi, I'm undefined"
person.greetRegular(); // "Hi, I'm Alice"
```

---

## 📖 Chapter 6: Scope — Where Variables Live

**Scope** determines where a variable is accessible. Think of it like **rooms in a house**:

- 🌍 **Global scope** = The front yard (everyone can see it)
- 🏠 **Function scope** = Inside your house (only your family)
- 🧊 **Block scope** = Inside a specific room (only people in that room)

### Global Scope

```javascript
// This variable is available EVERYWHERE
let globalVar = "I'm global!";

function test() {
  console.log(globalVar); // ✅ Can access
}

if (true) {
  console.log(globalVar); // ✅ Can access
}

test();
```

### Function Scope

```javascript
function test() {
  let secret = "I'm hidden!";
  console.log(secret); // ✅ Can access
}

test();
console.log(secret); // ❌ ReferenceError: secret is not defined
```

### Block Scope (`let` and `const`)

```javascript
if (true) {
  let blockVar = "I'm block-scoped!";
  const alsoBlock = "Me too!";
  var notBlock = "I'm NOT block-scoped!";  // var ignores blocks!
}

console.log(blockVar);  // ❌ ReferenceError
console.log(alsoBlock); // ❌ ReferenceError
console.log(notBlock);  // ✅ "I'm NOT block-scoped!" (var leaks out)
```

### Why `var` behaves differently:

```javascript
// var is FUNCTION-scoped, NOT block-scoped
for (var i = 0; i < 5; i++) {
  // loop body
}
console.log(i); // 5  ← var leaks out!

for (let j = 0; j < 5; j++) {
  // loop body
}
console.log(j); // ❌ ReferenceError — let stays in the block
```

### Scope Chain & Variable Lookup

JavaScript looks for variables from **inner to outer** scope:

```javascript
let global = "global";

function outer() {
  let outerVar = "outer";
  
  function inner() {
    let innerVar = "inner";
    console.log(innerVar);  // ✅ Found in inner scope
    console.log(outerVar);  // ✅ Found in outer scope
    console.log(global);    // ✅ Found in global scope
  }
  
  inner();
  console.log(innerVar); // ❌ Can't see inner scope
}

outer();
```

> 🧠 **Mental Model:** Scope lookup works like an onion. The innermost layer sees all outer layers, but outer layers can't see in.

---

## 📖 Chapter 7: Closures — The Magic Trick

A **closure** is when a function "remembers" the variables from where it was created, even after that outer function has finished running.

### 🧪 The Classic Example:

```javascript
function createCounter() {
  let count = 0;  // This variable "should" disappear after createCounter runs
  
  return function() {  // But this inner function "captures" it
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Each call "remembers" and updates the count!
```

### 🔍 How does this work?

1. `createCounter()` runs and creates a local variable `count = 0`
2. It returns an inner function that uses `count`
3. Normally, `count` would be garbage collected after `createCounter` finishes
4. BUT — the inner function **closes over** `count`, keeping it alive
5. Every time we call `counter()`, it accesses and updates that same `count`

### Real-World Use Case: Private Variables

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;  // "Private" — can't access directly
  
  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited $${amount}. Balance: $${balance}`);
    },
    withdraw: function(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrew $${amount}. Balance: $${balance}`);
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);   // Deposited $50. Balance: $150
myAccount.withdraw(30);  // Withdrew $30. Balance: $120
console.log(myAccount.getBalance()); // 120
console.log(myAccount.balance);      // undefined — can't access directly!
```

### Multiple Counters — Each is Independent!

```javascript
function createCounter() {
  let count = 0;
  return () => ++count;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1  ← starts fresh!
console.log(counter2()); // 2
console.log(counter1()); // 3  ← still remembers its own count
```

> 🧠 **Mental Model:** Each time you call `createCounter()`, you create a new "backpack" with its own `count`. The returned function carries that backpack everywhere.

---

## 📖 Chapter 8: Higher-Order Functions

A **higher-order function** is a function that either:
1. Takes a function as an argument, OR
2. Returns a function (like our closure examples)

### Functions as Arguments (Callbacks)

```javascript
function processUser(name, callback) {
  const greeting = `Hello, ${name}!`;
  callback(greeting);
}

function shout(message) {
  console.log(message.toUpperCase() + "!!!");
}

function whisper(message) {
  console.log(message.toLowerCase() + "...");
}

processUser("Alice", shout);   // "HELLO, ALICE!!!"
processUser("Bob", whisper);   // "hello, bob..."
```

### Returning Functions

```javascript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30
console.log(double(5));  // 10
```

### Practical Example: Array Methods

Array methods like `map`, `filter`, `forEach` are higher-order functions:

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach — do something with each element
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10

// map — transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter — keep elements that pass the test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

(We'll explore arrays more in Module 4!)

---

## ✏️ Practice Exercises

### Exercise 1: Basic Function
```javascript
// Write a function called 'isEven' that takes a number
// and returns true if it's even, false if it's odd
// Test it with several numbers

// 👇 Write your code here
```

### Exercise 2: Temperature Converter
```javascript
// Write two functions:
// 1. fahrenheitToCelsius(f) — converts F to C
//    Formula: (f - 32) × 5/9
// 2. celsiusToFahrenheit(c) — converts C to F
//    Formula: (c × 9/5) + 32

// 👇 Write your code here
```

### Exercise 3: Default Parameters
```javascript
// Write a function 'calculatePrice' that:
// - Takes basePrice and a second parameter (taxRate = 0.08 by default)
// - Returns the total price including tax
// - Test with and without providing taxRate

// 👇 Write your code here
```

### Exercise 4: Arrow Functions
```javascript
// Convert these functions to arrow functions:

function add(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

function greet(name) {
  return `Hey, ${name}!`;
}

// 👇 Write your arrow versions here
```

### Exercise 5: Scope Madness
```javascript
// What will this code print? Write your guess first!

let x = 10;

function outer() {
  let x = 20;
  
  function inner() {
    console.log(x);
  }
  
  inner();
}

outer();
console.log(x);

// Guess: _____________________

// Now run it and check!
```

### Exercise 6: Create a Closure
```javascript
// Write a function 'createMultiplier' that takes a number 'n'
// and returns a function that multiplies any number by n

// Test: const timesTwo = createMultiplier(2)
// console.log(timesTwo(5)) // should be 10
// console.log(timesTwo(10)) // should be 20

// 👇 Write your code here
```

---

## 🏆 Mini-Challenge: The Shopping Cart

Build a shopping cart system using closures:

```javascript
function createShoppingCart() {
  // The cart should be "private" (can't access from outside)
  // Return an object with these methods:
  // - addItem(name, price) — adds item to cart
  // - removeItem(name) — removes item by name
  // - getTotal() — returns total price
  // - showCart() — prints all items and total
  
  // 👇 Your code here
}

// Test it:
const myCart = createShoppingCart();
myCart.addItem("Apple", 1.50);
myCart.addItem("Banana", 0.75);
myCart.addItem("Milk", 3.50);
myCart.showCart();
// Should print:
// 🛒 Cart:
// Apple: $1.50
// Banana: $0.75
// Milk: $3.50
// Total: $5.75

myCart.removeItem("Banana");
myCart.showCart();
// Apple: $1.50
// Milk: $3.50
// Total: $5.00
```

---

## ⚠️ Common Pitfalls

1. **Forgetting `return`:** The function returns `undefined` instead of your value
2. **Calling vs. Referencing:** `myFunction` vs `myFunction()` — parentheses CALL the function
3. **Shadowing variables:** Using the same variable name in inner scope hides the outer one
4. **Arrow function `this` bug:** Arrow functions don't have their own `this`
5. **Modifying parameters:** Reassigning a parameter doesn't affect the original variable

```javascript
// Pitfall 2 example:
function sayHi() {
  return "Hi!";
}

console.log(sayHi);   // [Function: sayHi]  ← just the reference
console.log(sayHi()); // "Hi!"              ← calls the function
```

---

## 📚 Summary

| Concept | Key Takeaway |
|---------|--------------|
| **Declaration** | `function name() {}` — hoisted to top |
| **Expression** | `const fn = function() {}` — NOT hoisted |
| **Arrow** | `() => {}` — shorter, no own `this` |
| **Parameters** | Placeholders in definition |
| **Arguments** | Actual values passed when calling |
| **Return** | Sends value back, stops function |
| **Scope** | Global → Function → Block (inner sees outer) |
| **Closure** | Function "remembers" its creation scope |
| **Higher-order** | Functions that take/return functions |

---

## 🔜 Next Up: Module 4 — Arrays & Objects

You'll learn how to work with collections of data using arrays and objects, plus powerful methods to manipulate them!

---

*📝 Open `exercises/03-exercises.js` for more practice problems with solutions!*