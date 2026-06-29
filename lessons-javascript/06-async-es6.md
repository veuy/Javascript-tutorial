# 📘 Module 6: Async JavaScript & Modern ES6+
## Promises, Async/Await, Fetch API, and Modern Features

---

> **Estimated time to complete:** 2 weeks
> **Prerequisites:** Modules 1-5 (Fundamentals through DOM)
> **This is your FINAL module before building projects!**

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

- ✅ Understand synchronous vs. asynchronous code
- ✅ Use callbacks and understand callback hell
- ✅ Create and consume Promises
- ✅ Use `async/await` for clean asynchronous code
- ✅ Fetch data from APIs using `fetch()`
- ✅ Handle errors with try/catch
- ✅ Use modern ES6+ features (modules, optional chaining, nullish coalescing)
- ✅ Build a final project that ties everything together

---

## 📖 Chapter 1: Synchronous vs. Asynchronous

### Synchronous Code (Default)

JavaScript normally runs **line by line**. Each line must finish before the next starts:

```javascript
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Output:
// Step 1
// Step 2
// Step 3
```

### The Problem: Slow Operations

Some operations take time:
- Reading a file
- Fetching data from the internet
- Waiting a timeout
- Getting the user's location

If JavaScript waited for these, the entire page would **freeze**:

```javascript
console.log("Start");

// Imagine this takes 3 seconds
// ❌ Browser would freeze for 3 seconds!
wait(3000);

console.log("End");  // User can't interact during the wait!
```

### Asynchronous Code to the Rescue!

JavaScript uses **non-blocking** (asynchronous) patterns:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout (after 2 seconds)");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Inside timeout (after 2 seconds)
```

> 🧠 **Mental Model:** Think of synchronous code as **one checkout line** — everyone must wait. Asynchronous code is like **order numbers at a deli** — you place your order, get a number, and go do other things while they prepare your food. When it's ready, they call your number.

---

## 📖 Chapter 2: Callbacks — The Old Way

A **callback** is a function passed as an argument to another function, to be executed later.

```javascript
function doSomething(callback) {
  console.log("Doing something...");
  setTimeout(() => {
    console.log("Done!");
    callback();  // Call the callback when finished
  }, 1000);
}

function onComplete() {
  console.log("Callback executed!");
}

doSomething(onComplete);

// Output:
// Doing something...
// (1 second pause)
// Done!
// Callback executed!
```

### Callback Hell (The Pyramid of Doom)

When you need to do multiple async things in sequence, callbacks get messy:

```javascript
// 😱 Callback Hell!
getUserData(userId, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      getLikes(comments[0].id, (likes) => {
        console.log("Nested too deep!");
      });
    });
  });
});
```

This is why we need **Promises**.

---

## 📖 Chapter 3: Promises — The Better Way

A **Promise** is an object representing the eventual completion (or failure) of an async operation.

### Promise States

A Promise has 3 states:
1. **Pending** — waiting (not yet resolved)
2. **Fulfilled** — succeeded (resolved with a value)
3. **Rejected** — failed (with an error)

### Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Do something async
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Operation successful! 🎉");
    } else {
      reject("Something went wrong! 💥");
    }
  }, 2000);
});

// Consuming a Promise
myPromise
  .then((result) => {
    console.log(result);  // "Operation successful! 🎉"
  })
  .catch((error) => {
    console.error(error);  // "Something went wrong! 💥"
  })
  .finally(() => {
    console.log("Promise settled (success or failure)");  // Always runs
  });
```

### 🧪 Practical Example: Simulating an API Call

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching user ${id}...`);
    
    setTimeout(() => {
      const users = {
        1: { name: "Alice", age: 25 },
        2: { name: "Bob", age: 30 },
        3: { name: "Charlie", age: 35 }
      };
      
      const user = users[id];
      
      if (user) {
        resolve(user);
      } else {
        reject(new Error(`User ${id} not found`));
      }
    }, 1500);
  });
}

// Using the promise
fetchUser(1)
  .then(user => console.log(`Got user: ${user.name}`))
  .catch(err => console.error(err.message))
  .finally(() => console.log("Done fetching"));

fetchUser(5)
  .then(user => console.log(`Got user: ${user.name}`))
  .catch(err => console.error(err.message)); // "User 5 not found"
```

### Chaining Promises

Promises can be **chained** — the return of one `.then()` becomes the input of the next:

```javascript
fetchUser(1)
  .then(user => {
    console.log(`User: ${user.name}`);
    return user.age;  // Pass age to next .then()
  })
  .then(age => {
    console.log(`Age: ${age}`);
    return age >= 18 ? "Adult" : "Minor";
  })
  .then(status => {
    console.log(`Status: ${status}`);
  })
  .catch(err => {
    console.error("Any error in the chain is caught here:", err);
  });

// Output:
// User: Alice
// Age: 25
// Status: Adult
```

### Promise.all — Run Multiple Promises in Parallel

```javascript
const promise1 = fetchUser(1);
const promise2 = fetchUser(2);
const promise3 = fetchUser(3);

Promise.all([promise1, promise2, promise3])
  .then(users => {
    console.log("All users fetched:");
    users.forEach(u => console.log(`- ${u.name}`));
  })
  .catch(err => {
    console.error("ONE of them failed:", err);
  });

// Promise.allSettled — waits for ALL even if some fail
Promise.allSettled([promise1, promise2, promise3, fetchUser(99)])
  .then(results => {
    results.forEach(r => {
      if (r.status === "fulfilled") {
        console.log(`✅ ${r.value.name}`);
      } else {
        console.log(`❌ ${r.reason.message}`);
      }
    });
  });
```

---

## 📖 Chapter 4: Async/Await — The Modern Way

`async/await` is **syntactic sugar** over Promises. It makes async code read like synchronous code.

### Basic Syntax

```javascript
// The Promise way
function fetchUserWithPromise(id) {
  return fetchUser(id)
    .then(user => console.log(user.name))
    .catch(err => console.error(err));
}

// The async/await way
async function fetchUserWithAsync(id) {
  try {
    const user = await fetchUser(id);  // await "unwraps" the Promise
    console.log(user.name);
  } catch (err) {
    console.error(err.message);
  }
}

fetchUserWithAsync(1);
```

### How `await` Works

- `await` pauses the function execution until the Promise resolves
- It can only be used inside an `async` function
- The function is NOT blocking — other code can run while waiting

```javascript
async function demo() {
  console.log("Before await");
  
  const result = await new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 2000);
  });
  
  console.log(result);  // "Done!" (after 2 seconds)
  console.log("After await");
}

demo();
console.log("This runs immediately!");

// Output:
// Before await
// This runs immediately!
// (2 seconds later)
// Done!
// After await
```

### Multiple Awaits

```javascript
async function getUserData(userId) {
  try {
    const user = await fetchUser(userId);
    console.log(`Fetched user: ${user.name}`);
    
    // These run SEQUENTIALLY (one after another)
    const posts = await fetch(`/api/users/${userId}/posts`).then(r => r.json());
    console.log(`Fetched ${posts.length} posts`);
    
    return { user, posts };
  } catch (error) {
    console.error("Failed to get user data:", error);
    throw error;  // Re-throw if caller needs to handle it
  }
}

// For parallel execution, use Promise.all with await:
async function getMultipleUsers() {
  const ids = [1, 2, 3];
  const promises = ids.map(id => fetchUser(id));
  const users = await Promise.all(promises);
  console.log(users.map(u => u.name));  // ["Alice", "Bob", "Charlie"]
}
```

> 🧠 **Mental Model:** `await` is like standing in line. You tell the function "wait here until this is ready." But unlike blocking synchronous code, other code (like UI updates) can still run because the function is "paused," not frozen.

---

## 📖 Chapter 5: The Fetch API — Getting Data From The Internet

The **Fetch API** is the modern way to make HTTP requests in JavaScript. It returns a **Promise**.

### Basic GET Request

```javascript
async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();  // Parse JSON body
    console.log(data);
    
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

getTodos();
// Output:
// { userId: 1, id: 1, title: "delectus aut autem", completed: false }
```

### Different HTTP Methods

```javascript
// GET (default)
async function getData() {
  const res = await fetch("https://api.example.com/users");
  return res.json();
}

// POST — Send data
async function createUser(userData) {
  const res = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}

// PUT — Update data
async function updateUser(id, userData) {
  const res = await fetch(`https://api.example.com/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });
  return res.json();
}

// DELETE
async function deleteUser(id) {
  const res = await fetch(`https://api.example.com/users/${id}`, {
    method: "DELETE"
  });
  return res.ok;
}
```

### Free APIs to Practice With

```javascript
// JSONPlaceholder (fake data for testing)
const BASE = "https://jsonplaceholder.typicode.com";

async function practice() {
  // Get all posts
  const posts = await fetch(`${BASE}/posts`).then(r => r.json());
  console.log(`${posts.length} posts`);
  
  // Get comments for post 1
  const comments = await fetch(`${BASE}/posts/1/comments`).then(r => r.json());
  console.log(comments);
  
  // Get user 1
  const user = await fetch(`${BASE}/users/1`).then(r => r.json());
  console.log(user.name);
  
  // Chaining: get user → get their posts
  const u = await fetch(`${BASE}/users/1`).then(r => r.json());
  const userPosts = await fetch(`${BASE}/users/${u.id}/posts`).then(r => r.json());
  console.log(`${u.name} wrote ${userPosts.length} posts`);
}

practice();
```

---

## 📖 Chapter 6: Error Handling with try/catch

```javascript
async function safeFetch(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
    
  } catch (error) {
    if (error instanceof TypeError) {
      // Network error (no internet, DNS failure, etc.)
      console.error("🌐 Network error:", error.message);
    } else {
      // Other errors (HTTP, JSON parsing, etc.)
      console.error("❌ Error:", error.message);
    }
    
    // Return a default value instead of crashing
    return null;
  } finally {
    console.log("🔄 Fetch attempt completed");
  }
}

async function main() {
  const data = await safeFetch("https://jsonplaceholder.typicode.com/posts/1");
  if (data) {
    console.log(data.title);
  } else {
    console.log("Using fallback data");
  }
}
```

---

## 📖 Chapter 7: Modern ES6+ Features

### Modules (import/export)

Create `math.js`:
```javascript
// Named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// Default export
export default function subtract(a, b) { return a - b; }
```

Create `app.js`:
```javascript
// Import specific named exports
import { PI, add, multiply } from './math.js';

// Import with alias
import { add as sum } from './math.js';

// Import default export
import subtract from './math.js';

// Import everything
import * as MathUtils from './math.js';

console.log(add(5, 3));        // 8
console.log(PI);               // 3.14159
console.log(MathUtils.PI);     // 3.14159
```

> 📝 Note: To use modules in HTML, add `<script type="module" src="app.js">`

### Optional Chaining (`?.`)

Safely access nested properties without checking each level:

```javascript
const user = {
  name: "Alice",
  address: {
    city: "New York"
    // zip is missing!
  }
};

// Old way (error-prone)
// const zip = user.address.zip;  // Works fine (undefined)
// const street = user.address.street.name;  // ❌ TypeError!

// Old safe way (verbose)
const streetOld = user.address && user.address.street && user.address.street.name;

// New way (optional chaining)
const street = user?.address?.street?.name;  // undefined (no error!)
const zip = user?.address?.zip;              // undefined

// With function calls
const result = user?.getAddress?.();  // Only calls getAddress if it exists
```

### Nullish Coalescing (`??`)

Use `??` to provide defaults only for `null` or `undefined` (NOT for other falsy values):

```javascript
const value1 = null;
const value2 = undefined;
const value3 = 0;
const value4 = "";

// ❌ Problem with || — treats ALL falsy values as "no value"
console.log(value1 || "default");  // "default"
console.log(value3 || "default");  // "default" ← But 0 is a valid value!
console.log(value4 || "default");  // "default" ← Empty string is valid!

// ✅ Solution: ?? — only for null/undefined
console.log(value1 ?? "default");  // "default" (null)
console.log(value3 ?? "default");  // 0 (valid, so kept!)
console.log(value4 ?? "default");  // "" (valid, so kept!)
```

### The `forEach` Method

```javascript
const fruits = ["apple", "banana", "cherry"];

// forEach — do something with each element
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});
// 1: apple
// 2: banana
// 3: cherry
```

### Sets and Maps

```javascript
// Set — unique values only
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 3]);
console.log(uniqueNumbers);  // Set { 1, 2, 3 }
console.log(uniqueNumbers.size);  // 3
console.log(uniqueNumbers.has(2)); // true

uniqueNumbers.add(4);
uniqueNumbers.delete(1);

// Convert Set to Array
const arr = [...uniqueNumbers];
console.log(arr);  // [2, 3, 4]

// Map — key-value pairs with ANY key type (not just strings)
const userMap = new Map();
userMap.set("name", "Alice");
userMap.set(42, "The answer");
userMap.set({ id: 1 }, "Some object");

console.log(userMap.get("name"));  // "Alice"
console.log(userMap.has(42));      // true
console.log(userMap.size);         // 3
```

---

## ✏️ Practice Exercises

### Exercise 1: Create a Promise
```javascript
// Create a function 'wait' that returns a Promise
// It should resolve after 'ms' milliseconds
// Example: await wait(1000) → pauses 1 second

function wait(ms) {
  // 👇 Your code here
}

// Test it:
async function test() {
  console.log("Waiting...");
  await wait(2000);
  console.log("Done waiting!");
}
```

### Exercise 2: Fetch Data
```javascript
// Use the JSONPlaceholder API
// 1. Fetch user with ID 5
// 2. Fetch all posts from user 5
// 3. Log the user's name and the titles of their posts

const API = "https://jsonplaceholder.typicode.com";

// 👇 Write your code here
```

### Exercise 3: Error Handling
```javascript
// Write a function 'fetchWithRetry' that:
// - Takes a URL and maxRetries
// - Tries to fetch the URL
// - If it fails, waits 1 second and retries
// - After maxRetries, throws an error
// - Use try/catch and async/await

async function fetchWithRetry(url, maxRetries = 3) {
  // 👇 Your code here
}
```

### Exercise 4: Process Multiple Items
```javascript
// Fetch 5 posts from JSONPlaceholder (IDs 1-5)
// Use Promise.all to fetch them all at once
// Then log each post's title

// 👇 Write your code here
```

### Exercise 5: Optional Chaining & Nullish
```javascript
const data = {
  user: null,
  settings: {
    theme: "dark"
    // fontSize is missing
  }
};

// 1. Safely get fontSize (should be 16 if missing)
// 2. Safely get user.name (should be "Guest" if missing)
// 3. Safely call a method that might not exist

// 👇 Write your code here
```

---

## 🏆 Final Challenge: Weather Dashboard

Build a weather dashboard that fetches live data!

```html
<!DOCTYPE html>
<html>
<head>
  <title>Weather Dashboard</title>
  <style>
    body { font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px; }
    .weather-card { background: #f0f8ff; border-radius: 10px; padding: 20px; margin-top: 20px; }
    .error { color: red; }
    .loading { color: gray; }
    input, button { padding: 8px; font-size: 16px; }
  </style>
</head>
<body>
  <h1>🌤️ Weather Dashboard</h1>
  
  <div>
    <input type="text" id="cityInput" placeholder="Enter city name (e.g., London)">
    <button id="getWeather">Get Weather</button>
  </div>
  
  <div id="weatherResult"></div>
  <div id="error"></div>
  
  <script>
    // Use the free API: https://api.open-meteo.com/
    // Docs: https://open-meteo.com/en/docs
    
    // Step 1: Get coordinates from city name
    // Geocoding API: https://geocoding-api.open-meteo.com/v1/search?name=CITY
    
    // Step 2: Get weather from coordinates
    // Weather API: https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true
    
    // 👇 Your code here!
    
    // Requirements:
    // - User types a city name and clicks button (or presses Enter)
    // - Show loading state while fetching
    // - Display: city name, temperature, wind speed, weather description
    // - Handle errors (city not found, network error)
    // - Use async/await
    // - Bonus: Show weather icon based on conditions
  </script>
</body>
</html>
```

---

## ⚠️ Common Pitfalls

1. **Forgetting `await`:** Without `await`, you get a Promise object, not the resolved value.
2. **Not using try/catch:** Unhandled Promise rejections crash your app.
3. **Blocking the UI:** Heavy synchronous code in an async function still blocks!
4. **Race conditions:** Multiple async operations modifying the same data can conflict.
5. **Mixing `.then()` and `await`:** Pick one style and stick with it (prefer `async/await`).

### Debugging Async Code

```javascript
// ❌ This logs a Promise, not the data
console.log(fetch("https://api.example.com/data"));

// ✅ This logs the actual data
async function logData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
```

---

## 📚 Summary

| Concept | Key Takeaway |
|---------|--------------|
| **Sync vs Async** | Sync blocks, async doesn't |
| **Callbacks** | Function passed for later execution (old way) |
| **Promises** | Object representing future value (`.then()`, `.catch()`) |
| **Async/Await** | Syntactic sugar — makes async look sync |
| **Fetch API** | Modern HTTP requests, returns a Promise |
| **Error Handling** | `try/catch` for async/await, `.catch()` for Promises |
| **Modules** | `import`/`export` for organizing code |
| **Optional Chaining** | `?.` safe nested property access |
| **Nullish Coalescing** | `??` default only for null/undefined |

---

## 🎓 Congratulations! You've Completed the Course!

You now have a solid foundation in JavaScript. Here's what to do next:

1. **Build the projects** in the `projects/` folder
2. **Practice daily** — coding is a skill that improves with practice
3. **Build your own ideas** — the best way to learn is to build
4. **Join communities** — Stack Overflow, r/learnjavascript, Discord servers

### Recommended Next Topics:
- **Frameworks:** React, Vue, or Svelte
- **Backend:** Node.js, Express
- **State Management:** Redux, Zustand
- **TypeScript:** JavaScript with types
- **Testing:** Jest, Vitest

---

*📝 Open `exercises/06-exercises.js` for more practice problems with solutions!*