// ============================================
// 📘 EXERCISES: Module 3 — Functions
// ============================================

// ---------- EXERCISE 1: isEven ----------
function isEven(num) {
  // 👇 YOUR CODE HERE
}
console.log("--- Exercise 1 ---");
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false


// ---------- EXERCISE 2: Temperature Converter ----------
// Formula: C = (F - 32) × 5/9, F = (C × 9/5) + 32
// 👇 YOUR CODE HERE:
console.log("--- Exercise 2 ---");


// ---------- EXERCISE 3: Default Parameters ----------
// calculatePrice(basePrice, taxRate = 0.08)
// 👇 YOUR CODE HERE:
console.log("--- Exercise 3 ---");


// ---------- EXERCISE 4: Arrow Functions ----------
// Convert these to arrow functions:
function add(a, b) { return a + b; }
function square(n) { return n * n; }
function greet(name) { return `Hey, ${name}!`; }
// 👇 YOUR ARROW VERSIONS HERE:
console.log("--- Exercise 4 ---");


// ---------- EXERCISE 5: Scope Madness ----------
// Guess the output before running:
let x = 10;
function outer() {
  let x = 20;
  function inner() { console.log(x); }
  inner();
}
outer();
console.log(x);
// My guess: _______
console.log("--- Exercise 5 ---");


// ---------- EXERCISE 6: Create a Closure ----------
// createMultiplier(n) returns function that multiplies by n
// 👇 YOUR CODE HERE:
console.log("--- Exercise 6 ---");


// ---------- 🏆 MINI-CHALLENGE: Shopping Cart ----------
function createShoppingCart() {
  // 👇 YOUR CODE HERE
}
console.log("--- Shopping Cart ---");


// ============================================
// 🎯 SOLUTIONS
// ============================================
/*

--- Exercise 1 ---
function isEven(num) {
  return num % 2 === 0;
}

--- Exercise 2 ---
function fahrenheitToCelsius(f) {
  return (f - 32) * 5/9;
}
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}
console.log(fahrenheitToCelsius(100)); // 37.8
console.log(celsiusToFahrenheit(0));   // 32

--- Exercise 3 ---
function calculatePrice(basePrice, taxRate = 0.08) {
  return basePrice + (basePrice * taxRate);
}
console.log(calculatePrice(100));      // 108
console.log(calculatePrice(100, 0.1)); // 110

--- Exercise 4 ---
const add = (a, b) => a + b;
const square = n => n * n;
const greet = name => `Hey, ${name}!`;

--- Exercise 5 ---
// Output: 20 (inner scope), then 10 (global scope)
// The inner function sees the outer()'s x = 20
// Global x = 10 is unchanged

--- Exercise 6 ---
function createMultiplier(n) {
  return (num) => num * n;
}
const timesTwo = createMultiplier(2);
console.log(timesTwo(5));  // 10

--- Shopping Cart ---
function createShoppingCart() {
  let items = [];
  return {
    addItem(name, price) {
      items.push({ name, price });
    },
    removeItem(name) {
      items = items.filter(item => item.name !== name);
    },
    getTotal() {
      return items.reduce((sum, item) => sum + item.price, 0);
    },
    showCart() {
      console.log("🛒 Cart:");
      items.forEach(i => console.log(`${i.name}: $${i.price.toFixed(2)}`));
      console.log(`Total: $${this.getTotal().toFixed(2)}`);
    }
  };
}

*/