// ============================================
// 📘 EXERCISES: Module 2 — Control Flow
// ============================================

// ---------- EXERCISE 1: Age Classifier ----------
// Classify age: Infant(0-1), Child(2-12), Teen(13-19), Adult(20-64), Senior(65+)
let personAge = 25;
// 👇 YOUR CODE HERE:
console.log("--- Exercise 1 ---");


// ---------- EXERCISE 2: Even or Odd Loop ----------
// Loop 1-20, print "X is even" or "X is odd"
// 👇 YOUR CODE HERE:
console.log("--- Exercise 2 ---");


// ---------- EXERCISE 3: FizzBuzz ----------
// Loop 1-30: Fizz(÷3), Buzz(÷5), FizzBuzz(÷3&5), else number
// 👇 YOUR CODE HERE:
console.log("--- Exercise 3 ---");


// ---------- EXERCISE 4: Sum of Multiples ----------
// Sum all numbers 1-1000 divisible by 3 OR 5
// 👇 YOUR CODE HERE:
console.log("--- Exercise 4 ---");


// ---------- EXERCISE 5: Simple ATM ----------
let balance = 1000;
let withdrawAmount = 140;
// Check: sufficient funds? multiple of $20?
// 👇 YOUR CODE HERE:
console.log("--- Exercise 5 ---");


// ---------- EXERCISE 6: Password Validator ----------
let password = "MyPass123";
// Check: length >= 8, has number, has uppercase
// 👇 YOUR CODE HERE:
console.log("--- Exercise 6 ---");


// ---------- 🏆 MINI-CHALLENGE: Number Guessing ----------
// Random 1-100, loop until guessed, track attempts
// 👇 YOUR CODE HERE:
console.log("--- Number Guessing Game ---");


// ============================================
// 🎯 SOLUTIONS
// ============================================
/*

--- Exercise 1 ---
let age = 25;
if (age <= 1) console.log("Infant");
else if (age <= 12) console.log("Child");
else if (age <= 19) console.log("Teen");
else if (age <= 64) console.log("Adult");
else console.log("Senior");
// Output: Adult

--- Exercise 2 ---
for (let i = 1; i <= 20; i++) {
  console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
}

--- Exercise 3 ---
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

--- Exercise 4 ---
let sum = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) sum += i;
}
console.log(`Sum: ${sum}`); // 234168

--- Exercise 5 ---
if (withdrawAmount > balance) {
  console.log("Insufficient funds");
} else if (withdrawAmount % 20 !== 0) {
  console.log("Must be multiple of $20");
} else {
  balance -= withdrawAmount;
  console.log(`Withdrew $${withdrawAmount}. Balance: $${balance}`);
}

--- Exercise 6 ---
let hasUpper = false, hasNumber = false;
for (let char of password) {
  if (char >= 'A' && char <= 'Z') hasUpper = true;
  if (char >= '0' && char <= '9') hasNumber = true;
}
if (password.length >= 8 && hasUpper && hasNumber) {
  console.log("✅ Strong password");
} else {
  console.log("❌ Weak password");
}

--- Number Guessing ---
const secret = Math.floor(Math.random() * 100) + 1;
let guess, attempts = 0;
do {
  guess = Math.floor(Math.random() * 100) + 1;
  attempts++;
  if (guess > secret) console.log(`${guess} is too high`);
  else if (guess < secret) console.log(`${guess} is too low`);
} while (guess !== secret);
console.log(`🎉 Found ${secret} in ${attempts} tries!`);

*/