// ============================================
// 📘 EXERCISES: Module 4 — Arrays & Objects
// ============================================

// ---------- EXERCISE 1: Array Basics ----------
// 5 fav foods, add 6th, remove first, change 3rd, print length
// 👇 YOUR CODE HERE:
console.log("--- Exercise 1 ---");


// ---------- EXERCISE 2: Map, Filter, Reduce ----------
const numbers = [10, 25, 8, 42, 17, 3, 99];
// 1. Map to "even"/"odd" strings
// 2. Filter numbers > 20
// 3. Reduce to sum
// 4. Reduce to max
// 👇 YOUR CODE HERE:
console.log("--- Exercise 2 ---");


// ---------- EXERCISE 3: Object Practice ----------
// Create a book object with title, author, year, genres[], isRead
// Methods: info() and markRead()
// 👇 YOUR CODE HERE:
console.log("--- Exercise 3 ---");


// ---------- EXERCISE 4: Shopping Cart ----------
const cart = [
  { item: "Laptop", price: 999, quantity: 1 },
  { item: "Mouse", price: 25, quantity: 2 },
  { item: "Keyboard", price: 75, quantity: 1 },
  { item: "Monitor", price: 299, quantity: 1 }
];
// 1. Map: "Item - $price"
// 2. Filter: items under $100
// 3. Reduce: total cost (price × quantity)
// 4. Find most expensive item
// 👇 YOUR CODE HERE:
console.log("--- Exercise 4 ---");


// ---------- EXERCISE 5: Destructuring ----------
const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" }
];
// 1. Destructure first user's name and email
// 2. Function that prints user using destructuring
// 3. Map + destructuring to get all emails
// 👇 YOUR CODE HERE:
console.log("--- Exercise 5 ---");


// ---------- 🏆 MINI-CHALLENGE: Gradebook ----------
const gradebook = {
  students: [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [90, 88, 95] },
    { name: "Charlie", scores: [70, 85, 80] }
  ],
  // 👇 Add methods: addStudent, getStudentAverage, getClassAverage, getTopStudent
};
console.log("--- Gradebook ---");


// ============================================
// 🎯 SOLUTIONS
// ============================================
/*

--- Exercise 1 ---
let foods = ["Pizza", "Sushi", "Tacos", "Pasta", "Salad"];
foods.push("Burger");
foods.shift();
foods[2] = "Ramen";
console.log(foods.length); // 5

--- Exercise 2 ---
console.log(numbers.map(n => n % 2 === 0 ? "even" : "odd"));
console.log(numbers.filter(n => n > 20));        // [25, 42, 99]
console.log(numbers.reduce((s, n) => s + n, 0)); // 204
console.log(numbers.reduce((m, n) => Math.max(m, n), 0)); // 99

--- Exercise 3 ---
let book = {
  title: "1984", author: "Orwell", year: 1949,
  genres: ["dystopian", "sci-fi"], isRead: false,
  info() { return `${this.title} by ${this.author} (${this.year})`; },
  markRead() { this.isRead = true; }
};
console.log(book.info());
book.markRead();
console.log(book.isRead); // true

--- Exercise 4 ---
console.log(cart.map(p => `${p.item} - $${p.price}`));
console.log(cart.filter(p => p.price < 100));
console.log(cart.reduce((t, p) => t + p.price * p.quantity, 0)); // 1473
console.log(cart.reduce((m, p) => p.price > m.price ? p : m));

--- Exercise 5 ---
let { name, email } = users[0];
const printUser = ({ name, email }) => console.log(`${name}: ${email}`);
users.forEach(printUser);
let emails = users.map(({ email }) => email);
console.log(emails);

--- Gradebook ---
const gradebook = {
  students: [...],
  addStudent(name, scores) { this.students.push({ name, scores }); },
  getStudentAverage(name) {
    let s = this.students.find(s => s.name === name);
    return s ? s.scores.reduce((a, b) => a + b, 0) / s.scores.length : 0;
  },
  getClassAverage() {
    let total = this.students.reduce((sum, s) =>
      sum + s.scores.reduce((a, b) => a + b, 0) / s.scores.length, 0);
    return total / this.students.length;
  },
  getTopStudent() {
    return this.students.reduce((best, s) => {
      let avg = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
      let bestAvg = best.scores.reduce((a, b) => a + b, 0) / best.scores.length;
      return avg > bestAvg ? s : best;
    }).name;
  }
};

*/