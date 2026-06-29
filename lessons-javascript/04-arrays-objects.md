# 📘 Module 4: Arrays & Objects
## Data Structures, Methods, and Iteration

---

> **Estimated time to complete:** 2 weeks
> **Prerequisites:** Module 1-3 (Variables, Control Flow, Functions)

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

- ✅ Create and manipulate arrays using built-in methods
- ✅ Create and access properties in objects
- ✅ Use array methods like `map`, `filter`, `reduce`, and `forEach`
- ✅ Understand destructuring, spread, and rest operators
- ✅ Iterate over collections with `for...of` and `for...in`
- ✅ Combine arrays and objects to model real-world data

---

## 📖 Chapter 1: Arrays — Ordered Lists

An **array** is an ordered list of values. Think of it like a **numbered list** or a **train with compartments**:

```javascript
// Creating arrays
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [42, "hello", true, null, [1, 2]]; // Arrays can hold ANY type!

// Empty array
let empty = [];

console.log(fruits);  // ["apple", "banana", "cherry"]
```

### Accessing Elements — Indexing

Arrays are **zero-indexed**: the first element is at position 0.

```javascript
let fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits[0]);  // "apple"   (first element)
console.log(fruits[1]);  // "banana"  (second element)
console.log(fruits[3]);  // "date"    (fourth element)
console.log(fruits[4]);  // undefined (doesn't exist!)
```

> 🧠 **Mental Model:** Think of array indices as **house numbers on a street**. House #0 is first, House #1 is second, etc.

### Modifying Arrays

```javascript
let fruits = ["apple", "banana", "cherry"];

// Change an element
fruits[1] = "blueberry";
console.log(fruits);  // ["apple", "blueberry", "cherry"]

// Add at the end
fruits.push("date");
console.log(fruits);  // ["apple", "blueberry", "cherry", "date"]

// Remove from the end
let last = fruits.pop();
console.log(last);    // "date"
console.log(fruits);  // ["apple", "blueberry", "cherry"]

// Add at the beginning
fruits.unshift("apricot");
console.log(fruits);  // ["apricot", "apple", "blueberry", "cherry"]

// Remove from the beginning
let first = fruits.shift();
console.log(first);   // "apricot"
console.log(fruits);  // ["apple", "blueberry", "cherry"]
```

### The `length` Property

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);  // 3

// length is writable!
fruits.length = 2;      // Truncates the array!
console.log(fruits);    // ["apple", "banana"]

fruits.length = 0;      // Empties the array!
console.log(fruits);    // []
```

---

## 📖 Chapter 2: Essential Array Methods

### Finding Elements

```javascript
let fruits = ["apple", "banana", "cherry", "banana"];

// indexOf — finds the FIRST index of a value
console.log(fruits.indexOf("banana"));    // 1
console.log(fruits.indexOf("grape"));     // -1 (not found)

// lastIndexOf — finds the LAST index
console.log(fruits.lastIndexOf("banana"));  // 3

// includes — checks if value exists
console.log(fruits.includes("apple"));   // true
console.log(fruits.includes("grape"));   // false
```

### Slicing and Splicing

```javascript
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// slice — extracts a portion (creates NEW array, doesn't modify original)
let sliced = fruits.slice(1, 3);  // start at 1, end BEFORE 3
console.log(sliced);              // ["banana", "cherry"]
console.log(fruits);              // Original unchanged

// splice — adds/removes elements (MODIFIES original)
let removed = fruits.splice(2, 2);  // start at 2, remove 2 items
console.log(removed);  // ["cherry", "date"]
console.log(fruits);   // ["apple", "banana", "elderberry"]

// splice can also insert
fruits.splice(1, 0, "blueberry", "blackberry");  // Insert at index 1
console.log(fruits);  // ["apple", "blueberry", "blackberry", "banana", "elderberry"]
```

### Joining and Splitting

```javascript
// join — array → string
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.join());           // "apple,banana,cherry"
console.log(fruits.join(" - "));      // "apple - banana - cherry"
console.log(fruits.join(""));         // "applebananacherry"

// split — string → array
let sentence = "Hello world from JavaScript";
let words = sentence.split(" ");
console.log(words);  // ["Hello", "world", "from", "JavaScript"]

let letters = "hello".split("");
console.log(letters);  // ["h", "e", "l", "l", "o"]
```

### The "Big Three": `map`, `filter`, `reduce`

These are **higher-order functions** they take a callback function.

#### `map` — Transform Every Element

```javascript
const numbers = [1, 2, 3, 4, 5];

// Double every number
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Convert to strings
const strings = numbers.map(num => `Number ${num}`);
console.log(strings);
// ["Number 1", "Number 2", "Number 3", "Number 4", "Number 5"]

// Real-world: Extract specific property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const names = users.map(user => user.name);
console.log(names);  // ["Alice", "Bob", "Charlie"]
```

#### `filter` — Keep Elements That Pass a Test

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6, 8, 10]

const bigNumbers = numbers.filter(num => num > 5);
console.log(bigNumbers);  // [6, 7, 8, 9, 10]

// Real-world
const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 699, inStock: false },
  { name: "Tablet", price: 399, inStock: true }
];
const available = products.filter(p => p.inStock);
console.log(available);  // [{Laptop...}, {Tablet...}]
```

#### `reduce` — Accumulate to a Single Value

```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);  // 15

// Find the maximum
const max = numbers.reduce((acc, curr) => Math.max(acc, curr), 0);
console.log(max);  // 5

// Real-world: Total price
const cart = [
  { item: "Apple", price: 1.50 },
  { item: "Banana", price: 0.75 },
  { item: "Milk", price: 3.50 }
];
const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(`Total: $${total}`);  // Total: $5.75
```

> 🧠 **Mental Model:**
> - `map` = "Give me a new array, same length, each element transformed"
> - `filter` = "Give me a new array, possibly shorter, only elements that pass the test"
> - `reduce` = "Give me one value computed from all elements"

---

## 📖 Chapter 3: Objects — Key-Value Pairs

An **object** is a collection of **key-value pairs**. Keys are strings, values can be any type.

```javascript
// Creating an object
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding", "hiking"]
};

// Accessing properties
console.log(person.name);          // "Alice"  (dot notation)
console.log(person["age"]);        // 25       (bracket notation)

// Adding/updating properties
person.city = "New York";          // Add new property
person.age = 26;                   // Update existing

// Deleting properties
delete person.isStudent;
console.log(person);  // {name: "Alice", age: 26, hobbies: [...], city: "New York"}
```

### Dot vs. Bracket Notation

```javascript
let user = {
  firstName: "John",
  "last-name": "Doe",   // Hyphen in key requires quotes
  "favorite color": "blue"  // Space requires quotes
};

// Dot notation — only works with valid identifiers
console.log(user.firstName);     // "John"
// console.log(user.last-name);  // ❌ Error! hyphen looks like subtraction!

// Bracket notation — works with ANY string
console.log(user["last-name"]);       // "Doe"
console.log(user["favorite color"]);  // "blue"

// Bracket notation with variables
let key = "firstName";
console.log(user[key]);  // "John"
```

### Nested Objects

```javascript
let student = {
  name: "Alice",
  grades: {
    math: 95,
    science: 88,
    english: 92
  },
  address: {
    city: "Boston",
    zip: "02101",
    coordinates: {
      lat: 42.36,
      lng: -71.06
    }
  }
};

// Accessing nested properties
console.log(student.grades.math);                    // 95
console.log(student.address.coordinates.lat);        // 42.36
console.log(student["address"]["city"]);             // "Boston"
```

### Object Methods

```javascript
let person = {
  name: "Alice",
  age: 25,
  // Method (function inside an object)
  greet: function() {
    console.log(`Hi, I'm ${this.name}!`);
  },
  // Shorthand method syntax (ES6)
  celebrateBirthday() {
    this.age++;
    console.log(`Now I'm ${this.age}!`);
  }
};

person.greet();  // "Hi, I'm Alice!"
person.celebrateBirthday();  // "Now I'm 26!"
```

---

## 📖 Chapter 4: Useful Object Methods

```javascript
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// Get all keys
console.log(Object.keys(person));   // ["name", "age", "city"]

// Get all values
console.log(Object.values(person)); // ["Alice", 25, "New York"]

// Get key-value pairs as arrays
console.log(Object.entries(person));
// [["name", "Alice"], ["age", 25], ["city", "New York"]]

// Check if property exists
console.log(person.hasOwnProperty("name"));  // true
console.log("age" in person);                // true
```

### Looping Through Objects

```javascript
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// for...in — iterates over keys
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: Alice
// age: 25
// city: New York

// Using Object.entries() with for...of
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Same output
```

---

## 📖 Chapter 5: Arrays of Objects — Real Data

Most real-world data is **arrays of objects**:

```javascript
const movies = [
  { title: "The Matrix", year: 1999, rating: 8.7 },
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
  { title: "The Dark Knight", year: 2008, rating: 9.0 },
  { title: "Tenet", year: 2020, rating: 7.4 }
];

// Find all movies with rating > 8.5
const greatMovies = movies.filter(m => m.rating > 8.5);
console.log(greatMovies);

// Get just the titles
const titles = movies.map(m => m.title);
console.log(titles);  // ["The Matrix", "Inception", "Interstellar", ...]

// Get average rating
const avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
console.log(avgRating.toFixed(1));  // 8.5

// Find a specific movie
const matrix = movies.find(m => m.title === "The Matrix");
console.log(matrix);  // { title: "The Matrix", year: 1999, rating: 8.7 }

// Sort by year (oldest first)
const byYear = [...movies].sort((a, b) => a.year - b.year);
console.log(byYear);
```

---

## 📖 Chapter 6: Destructuring — Extract Values Easily

### Array Destructuring

```javascript
let colors = ["red", "green", "blue"];

// Old way
let first = colors[0];
let second = colors[1];

// Destructuring
let [a, b, c] = colors;
console.log(a);  // "red"
console.log(b);  // "green"
console.log(c);  // "blue"

// Skip elements
let [primary, , tertiary] = colors;
console.log(primary);   // "red"
console.log(tertiary);  // "blue"

// Rest pattern
let [head, ...tail] = colors;
console.log(head);  // "red"
console.log(tail);  // ["green", "blue"]

// Default values
let [x = 1, y = 2, z = 3] = [10];
console.log(x);  // 10  (from array)
console.log(y);  // 2   (default)
console.log(z);  // 3   (default)
```

### Object Destructuring

```javascript
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// Old way
let name = person.name;
let age = person.age;

// Destructuring
let { name, age, city } = person;
console.log(name);  // "Alice"
console.log(age);   // 25
console.log(city);  // "New York"

// Rename variables
let { name: fullName, age: years } = person;
console.log(fullName);  // "Alice"
console.log(years);     // 25

// Default values
let { name, country = "USA" } = person;
console.log(name);     // "Alice"
console.log(country);  // "USA" (used default)

// Nested destructuring
let student = { name: "Bob", grades: { math: 90, science: 85 } };
let { grades: { math, science } } = student;
console.log(math);    // 90
console.log(science); // 85
```

### Destructuring in Function Parameters

```javascript
// Instead of:
function printPerson(person) {
  console.log(`${person.name} is ${person.age}`);
}

// Destructure right in the parameter!
function printPerson({ name, age }) {
  console.log(`${name} is ${age}`);
}

printPerson({ name: "Alice", age: 25 });  // "Alice is 25"

// Useful for options objects
function createUser({ name, age = 18, role = "user" } = {}) {
  console.log(`Created ${role}: ${name} (${age})`);
}

createUser({ name: "Alice", role: "admin" });  // "Created admin: Alice (18)"
```

---

## 📖 Chapter 7: Spread and Rest Operators (`...`)

### Spread — Expand an Array/Object

```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

let copy = [...arr1];  // Creates a SHALLOW copy
console.log(copy);     // [1, 2, 3]

// Objects (ES2018)
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let merged = { ...obj1, ...obj2 };
console.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
let defaults = { theme: "light", fontSize: 14 };
let userPrefs = { theme: "dark" };
let settings = { ...defaults, ...userPrefs };
console.log(settings);  // { theme: "dark", fontSize: 14 }
```

### Rest — Collect Remaining Values

```javascript
// In arrays (destructuring)
let [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]

// In objects (destructuring)
let { a, ...restObj } = { a: 1, b: 2, c: 3 };
console.log(a);       // 1
console.log(restObj); // { b: 2, c: 3 }

// In functions
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));  // 15
```

---

## ✏️ Practice Exercises

### Exercise 1: Array Basics
```javascript
// 1. Create an array of your 5 favorite foods
// 2. Add a 6th food to the end
// 3. Remove the first food
// 4. Change the 3rd food to something else
// 5. Print the array length

// 👇 Write your code here
```

### Exercise 2: Map, Filter, Reduce
```javascript
const numbers = [10, 25, 8, 42, 17, 3, 99];

// 1. Use map to create an array of "even" or "odd" strings
// 2. Use filter to get numbers > 20
// 3. Use reduce to find the sum of all numbers
// 4. Use reduce to find the maximum number

// 👇 Write your code here
```

### Exercise 3: Object Practice
```javascript
// Create a 'book' object with:
// - title, author, year, genres (array), isRead (boolean)
// - Add a method 'info' that returns a summary
// - Add a method 'markRead' that sets isRead to true

// 👇 Write your code here
```

### Exercise 4: Shopping Cart
```javascript
const cart = [
  { item: "Laptop", price: 999, quantity: 1 },
  { item: "Mouse", price: 25, quantity: 2 },
  { item: "Keyboard", price: 75, quantity: 1 },
  { item: "Monitor", price: 299, quantity: 1 }
];

// 1. Use map to create an array of strings: "Laptop - $999"
// 2. Use filter to find items under $100
// 3. Use reduce to calculate total cost (price × quantity for each)
// 4. Find the most expensive item

// 👇 Write your code here
```

### Exercise 5: Destructuring
```javascript
const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" }
];

// 1. Destructure the first user's name and email
// 2. Create a function that prints a user using destructuring
// 3. Use map + destructuring to get all emails

// 👇 Write your code here
```

---

## 🏆 Mini-Challenge: Gradebook

Create a gradebook system:

```javascript
const gradebook = {
  students: [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [90, 88, 95] },
    { name: "Charlie", scores: [70, 85, 80] }
  ],
  
  // Add a method to add a student
  // Add a method to get a student's average
  // Add a method to get the class average
  // Add a method to find the top student
  // Add a method to list all students with their averages
  
  // 👇 Your code here
};

// Test it:
// gradebook.addStudent("Diana", [100, 95, 98])
// console.log(gradebook.getStudentAverage("Alice"))  // 85
// console.log(gradebook.getClassAverage())           // ~85.6
// console.log(gradebook.getTopStudent())             // "Bob" or highest avg
```

---

## ⚠️ Common Pitfalls

1. **`const` with arrays/objects:** `const arr = [1,2,3]; arr.push(4);` ✅ Works! `const` prevents reassignment, not modification.
2. **Shallow copying:** `[...arr]` only copies one level deep. Nested objects/arrays are still shared.
3. **`for...in` on arrays:** Use `for...of` for arrays (values), `for...in` for objects (keys).
4. **Mutating methods:** `sort()`, `reverse()`, `splice()` modify the original array. `slice()` and `map()` do not.
5. **Comparing objects:** `{a:1} === {a:1}` is `false` — each object has its own reference.

---

## 📚 Summary

| Concept | Key Takeaway |
|---------|--------------|
| **Array** | Ordered list, zero-indexed |
| **Array methods** | `push/pop/shift/unshift`, `map/filter/reduce`, `slice/splice` |
| **Object** | Key-value pairs for structured data |
| **Destructuring** | Extract values with `{ }` or `[ ]` syntax |
| **Spread** | `...` expands elements/properties |
| **Rest** | `...` collects remaining values |
| **Nested data** | Access with chained dot/bracket notation |

---

## 🔜 Next Up: Module 5 — DOM Manipulation & Events

You'll learn how to interact with web pages — selecting elements, handling clicks, forms, and building interactive UIs!

---

*📝 Open `exercises/04-exercises.js` for more practice problems with solutions!*