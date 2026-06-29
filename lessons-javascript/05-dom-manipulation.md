# 📘 Module 5: DOM Manipulation & Events
## Building Interactive Web Pages

---

> **Estimated time to complete:** 2 weeks
> **Prerequisites:** Modules 1-4 (JS Fundamentals + Control Flow + Functions + Data Structures)

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

- ✅ Select DOM elements using `querySelector`, `getElementById`, etc.
- ✅ Modify element content, attributes, and styles
- ✅ Create and remove elements dynamically
- ✅ Handle user events (click, input, submit, keyboard)
- ✅ Understand event propagation (bubbling and capturing)
- ✅ Build interactive forms with validation
- ✅ Create a complete interactive page

---

## 📖 Chapter 1: What is the DOM?

**DOM** stands for **Document Object Model**. It's the browser's representation of your HTML page as a **tree of objects**.

### 🧠 Mental Model:

Think of the DOM as a **family tree**:

```
document
 └── html
      ├── head
      │    ├── title
      │    └── meta
      └── body
           ├── header
           ├── main
           │    ├── section
           │    └── article
           └── footer
```

Each HTML element becomes a **node** in this tree. JavaScript can:
- **Find** any node
- **Read** its content and attributes
- **Modify** its content, style, and attributes
- **Create** new nodes
- **Remove** existing nodes
- **Respond** to user interactions (clicks, typing, etc.)

---

## 📖 Chapter 2: Selecting Elements

Before you can do anything with an element, you need to **find it**.

### 2.1 By ID

```javascript
// HTML: <p id="intro">Hello!</p>
const intro = document.getElementById("intro");
console.log(intro);       // <p id="intro">Hello!</p>
console.log(intro.textContent);  // "Hello!"
```

### 2.2 By Class Name

```javascript
// HTML: <div class="card">Card 1</div><div class="card">Card 2</div>
const cards = document.getElementsByClassName("card");
console.log(cards);       // HTMLCollection (live, array-like)
console.log(cards[0]);    // First card element
console.log(cards.length); // 2
```

### 2.3 By Tag Name

```javascript
// HTML: <p>Para 1</p><p>Para 2</p>
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);  // 2
```

### 2.4 querySelector (🔑 MOST IMPORTANT - Learn This!)

```javascript
// Returns the FIRST matching element (single)
const firstCard = document.querySelector(".card");
const mainTitle = document.querySelector("#title");
const firstButton = document.querySelector("button");
const nestedItem = document.querySelector("div.container > ul > li");

// Returns ALL matching elements (NodeList)
const allCards = document.querySelectorAll(".card");
console.log(allCards.length);   // 2
console.log(allCards[0]);       // First card

// querySelectorAll returns a NodeList (not live, has forEach!)
allCards.forEach(card => {
  console.log(card.textContent);
});
```

> 🧠 **querySelector uses CSS selectors!** Whatever selector you'd use in CSS (`.class`, `#id`, `tag`, `div > p`, etc.) works in `querySelector`/`querySelectorAll`.

---

## 📖 Chapter 3: Reading & Modifying Content

### 3.1 textContent vs innerHTML

```javascript
const div = document.querySelector(".content");

// textContent — plain text only (SECURE, use by default)
console.log(div.textContent);
div.textContent = "New text content";

// innerHTML — includes HTML (DANGEROUS with user input!)
console.log(div.innerHTML);
div.innerHTML = "<strong>Bold text</strong>";

// ❌ NEVER do this with user input:
// div.innerHTML = userInput;  // XSS vulnerability!
```

### 3.2 Attributes

```javascript
const link = document.querySelector("a");

// Get attributes
console.log(link.getAttribute("href"));
console.log(link.href);  // Property shortcut for common attributes

// Set attributes
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");

// Check and remove
console.log(link.hasAttribute("target"));  // true
link.removeAttribute("target");
```

### 3.3 Classes

```javascript
const div = document.querySelector(".box");

// Add class
div.classList.add("active");

// Remove class
div.classList.remove("hidden");

// Toggle (add if not present, remove if present)
div.classList.toggle("visible");

// Check if class exists
console.log(div.classList.contains("active"));  // true

// Replace one class with another
div.classList.replace("old-class", "new-class");
```

### 3.4 Styles

```javascript
const div = document.querySelector(".box");

// Inline styles (camelCase property names!)
div.style.backgroundColor = "blue";
div.style.fontSize = "20px";
div.style.marginTop = "10px";
div.style.display = "none";

// Multiple styles at once
Object.assign(div.style, {
  color: "white",
  padding: "20px",
  borderRadius: "8px"
});

// Reading computed styles
const styles = getComputedStyle(div);
console.log(styles.backgroundColor);
```

> ⚠️ **Best Practice:** Prefer adding/removing CSS **classes** over manipulating inline styles. Keep styling in CSS files!

---

## 📖 Chapter 4: Creating & Removing Elements

### Creating Elements

```javascript
// 1. Create the element
const newParagraph = document.createElement("p");

// 2. Add content
newParagraph.textContent = "This is a new paragraph!";
newParagraph.classList.add("highlight");

// 3. Add to the DOM
const container = document.querySelector(".container");
container.appendChild(newParagraph);        // Add at end
// container.prepend(newParagraph);          // Add at beginning
```

### More Insertion Methods

```javascript
const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "New item";

// Insert at specific position
list.insertBefore(newItem, list.children[0]);  // Before first child

// Modern: insertAdjacentHTML/Element
const ref = document.querySelector(".reference");
ref.insertAdjacentElement("beforebegin", newItem);  // Before element
ref.insertAdjacentElement("afterbegin", newItem);   // First child
ref.insertAdjacentElement("beforeend", newItem);    // Last child
ref.insertAdjacentElement("afterend", newItem);     // After element
```

### Removing Elements

```javascript
const element = document.querySelector(".to-remove");

// Method 1
element.remove();

// Method 2 (older)
element.parentNode.removeChild(element);

// Clear all children
const container = document.querySelector(".container");
container.innerHTML = "";  // Quick but not performant for large trees

// Better way
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
```

---

## 📖 Chapter 5: Events — Making Things Interactive

Events are the core of interactivity. An **event** is something the user does (click, type, submit, etc.) or the browser does (page load, etc.).

### 5.1 Adding Event Listeners

```javascript
const button = document.querySelector("button");

// Basic click handler
button.addEventListener("click", function() {
  console.log("Button was clicked!");
});

// Using arrow function
button.addEventListener("click", () => {
  console.log("Clicked!");
});

// Named function
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);

// Remove event listener (needs named function)
button.removeEventListener("click", handleClick);
```

### 5.2 The Event Object

Every event handler receives an **event object** with information about the event:

```javascript
button.addEventListener("click", (event) => {
  console.log(event.type);       // "click"
  console.log(event.target);     // The element that was clicked
  console.log(event.currentTarget);  // The element the listener is on
  console.log(event.clientX);    // Mouse X position
  console.log(event.clientY);    // Mouse Y position
  console.log(event.key);        // For keyboard events
});
```

### 5.3 Common Events

```javascript
// Click
element.addEventListener("click", handler);

// Double click
element.addEventListener("dblclick", handler);

// Mouse
element.addEventListener("mouseenter", handler);  // Hover start
element.addEventListener("mouseleave", handler);  // Hover end
element.addEventListener("mousemove", handler);

// Keyboard
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
  if (e.key === "Enter") {
    console.log("Enter was pressed!");
  }
});

document.addEventListener("keyup", handler);

// Form
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);    // Clicked into
input.addEventListener("blur", handler);     // Clicked out of
input.addEventListener("input", handler);    // Every keystroke
input.addEventListener("change", handler);   // When value changes and unfocuses
```

### 5.4 Event Propagation: Bubbling

When you click a child element, the event **bubbles up** through parent elements:

```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click me</button>
  </div>
</div>
```

```javascript
document.querySelector("#outer").addEventListener("click", () => {
  console.log("Outer clicked");
});
document.querySelector("#inner").addEventListener("click", () => {
  console.log("Inner clicked");
});
document.querySelector("#btn").addEventListener("click", (e) => {
  console.log("Button clicked");
  e.stopPropagation();  // 🛑 Stop bubbling!
});

// Clicking the button without stopPropagation:
// "Button clicked" → "Inner clicked" → "Outer clicked"

// With stopPropagation:
// Only "Button clicked"
```

> 🧠 **Mental Model:** Events bubble up like bubbles in water. Clicking a button triggers the button's handler, then its parent's, then its grandparent's, all the way up to `document`.

### 5.5 Event Delegation

Instead of adding listeners to many elements, add ONE listener to a parent:

```javascript
// ❌ Inefficient — adds listener to every item
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("done");
  });
});

// ✅ Efficient — ONE listener on the parent!
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

// Even better with data attributes
// HTML: <li data-id="123">Item</li>
document.querySelector("ul").addEventListener("click", (e) => {
  const li = e.target.closest("li");  // Find nearest li ancestor
  if (li) {
    console.log(`Clicked item ${li.dataset.id}`);
  }
});
```

---

## 📖 Chapter 6: Working with Forms

```html
<form id="loginForm">
  <input type="text" id="username" placeholder="Username" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Login</button>
</form>
```

```javascript
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();  // 🛑 Stop page reload!
  
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  
  if (username.length < 3) {
    alert("Username must be at least 3 characters!");
    return;
  }
  
  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }
  
  console.log(`Logging in: ${username}`);
  // Here you'd typically send data to a server
});
```

### Real-time Validation

```javascript
const usernameInput = document.querySelector("#username");
const errorMsg = document.querySelector("#username-error");

usernameInput.addEventListener("input", () => {
  const value = usernameInput.value;
  
  if (value.length === 0) {
    errorMsg.textContent = "Username is required";
    errorMsg.style.color = "red";
  } else if (value.length < 3) {
    errorMsg.textContent = "Must be at least 3 characters";
    errorMsg.style.color = "orange";
  } else {
    errorMsg.textContent = "✓ Looks good!";
    errorMsg.style.color = "green";
  }
});
```

---

## 📖 Chapter 7: Practice Project — Simple Counter

Let's build a working counter:

```html
<div class="counter">
  <h1>Counter: <span id="count">0</span></h1>
  <button id="decrement">-</button>
  <button id="increment">+</button>
  <button id="reset">Reset</button>
</div>
```

```javascript
const countDisplay = document.querySelector("#count");
const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment");
const resetBtn = document.querySelector("#reset");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
  
  // Change color based on value
  if (count > 0) countDisplay.style.color = "green";
  else if (count < 0) countDisplay.style.color = "red";
  else countDisplay.style.color = "black";
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

updateDisplay();  // Initial render
```

---

## ✏️ Practice Exercises

### Exercise 1: Change Content
```html
<!-- Use this HTML structure in your playground or create an HTML file -->
<div id="app">
  <h1 id="title">Hello!</h1>
  <p class="description">This is a paragraph.</p>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <button id="changeBtn">Change</button>
</div>

<script>
// Write JS to:
// 1. Change the title to "DOM Manipulation"
// 2. Change the description text
// 3. Add a 4th item to the list
// 4. When button is clicked, toggle a "highlight" class on the title
</script>
```

### Exercise 2: Color Picker
```html
<div id="app">
  <div id="colorBox" style="width:200px;height:200px;border:1px solid black;"></div>
  <input type="text" id="colorInput" placeholder="Enter color (red, #ff0000)">
  <button id="applyBtn">Apply Color</button>
</div>

<script>
// When button is clicked or Enter is pressed:
// - Read the input value
// - Set the colorBox background to that color
// - Clear the input
// - If invalid color, show an error
</script>
```

### Exercise 3: To-Do List (Simple)
```html
<div id="app">
  <input type="text" id="todoInput" placeholder="Add a task">
  <button id="addBtn">Add</button>
  <ul id="todoList"></ul>
</div>

<script>
// When "Add" is clicked:
// - Create a new <li> with the input value
// - Add it to the list
// - Clear the input
// - Clicking an <li> should toggle "done" class (strikethrough)
</script>
```

### Exercise 4: Keyboard Events
```javascript
// 1. Log which key is pressed
// 2. If the key is a letter (a-z), log "Letter pressed"
// 3. If it's a number, log "Number pressed"
// 4. If it's Enter, log "Enter pressed"
// 5. Display the last 5 keys pressed on the page

// 👇 Write your code here
```

### Exercise 5: Event Delegation
```html
<div id="app">
  <button data-action="save">Save</button>
  <button data-action="delete">Delete</button>
  <button data-action="edit">Edit</button>
  <button data-action="cancel">Cancel</button>
  <p id="actionOutput">Click a button</p>
</div>

<script>
// Use ONE event listener on the parent div
// Read the data-action attribute
// Display the action in the output paragraph
</script>
```

---

## 🏆 Mini-Challenge: Interactive To-Do List

Build a full-featured to-do list:

**Features:**
1. Add tasks with input + button or Enter key
2. Click a task to toggle completed (strikethrough)
3. Double-click a task to delete it
4. Show count of incomplete tasks
5. "Clear All Completed" button
6. Filter buttons: All | Active | Completed

**HTML Structure:**
```html
<div id="todo-app">
  <h1>📝 My Todo List</h1>
  
  <div class="add-todo">
    <input type="text" id="taskInput" placeholder="What needs to be done?">
    <button id="addTaskBtn">Add</button>
  </div>
  
  <div class="filters">
    <button class="filter active" data-filter="all">All</button>
    <button class="filter" data-filter="active">Active</button>
    <button class="filter" data-filter="completed">Completed</button>
  </div>
  
  <ul id="taskList"></ul>
  
  <div class="todo-footer">
    <span id="taskCount">0 tasks left</span>
    <button id="clearCompleted">Clear Completed</button>
  </div>
</div>
```

```javascript
// 👇 Your JavaScript code here
```

---

## ⚠️ Common Pitfalls

1. **DOM not loaded:** Script runs before HTML exists! Put `<script>` at the bottom of `<body>` or use `DOMContentLoaded`.
2. **Using `innerHTML` with user input:** **XSS vulnerability!** Use `textContent` instead.
3. **Forgetting `e.preventDefault()` on forms:** The page reloads and you lose all your work.
4. **Adding too many event listeners:** Use event delegation for many similar elements.
5. **Styling inline vs classes:** Prefer toggling CSS classes over `element.style.property`.

### DOMContentLoaded — Wait for HTML to be ready

```javascript
// Runs after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Safe to access DOM elements here
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    console.log("DOM is ready!");
  });
});

// Or just put your <script> tag at the end of <body>
```

---

## 📚 Summary

| Concept | Key Takeaway |
|---------|--------------|
| **Selecting** | `querySelector()` and `querySelectorAll()` are most flexible |
| **Content** | Use `textContent` for text, `innerHTML` carefully |
| **Attributes** | `getAttribute()`, `setAttribute()`, `removeAttribute()` |
| **Classes** | `classList.add/remove/toggle/contains` |
| **Creating** | `document.createElement()`, `appendChild()`, `insertBefore()` |
| **Removing** | `element.remove()` or `parent.removeChild(child)` |
| **Events** | `element.addEventListener(type, handler)` |
| **Event object** | Contains `target`, `type`, coordinates, key info |
| **Bubbling** | Events propagate upward; use `stopPropagation()` to halt |
| **Delegation** | One listener on parent for many children |
| **Forms** | `e.preventDefault()` stops reload; use `.value` for inputs |

---

## 🔜 Next Up: Module 6 — Async JavaScript & ES6+

You'll learn about callbacks, Promises, async/await, the Fetch API, and modern ES6+ features — including building your final project!

---

*📝 Open `exercises/05-exercises.js` for more practice problems with solutions!*