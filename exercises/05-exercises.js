// ============================================
// 📘 EXERCISES: Module 5 — DOM Manipulation
// ============================================
// NOTE: These exercises require an HTML page to run!
// Copy the HTML into the playground's HTML or create an HTML file.

// ---------- EXERCISE 1: Change Content ----------
/*
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
*/
// 1. Change title to "DOM Manipulation"
// 2. Change description text
// 3. Add 4th item to list
// 4. Button click toggles "highlight" class on title
// 👇 YOUR CODE HERE:


// ---------- EXERCISE 2: Color Picker ----------
/*
<div id="colorApp">
  <div id="colorBox" style="width:200px;height:200px;border:1px solid black;"></div>
  <input type="text" id="colorInput" placeholder="Enter color">
  <button id="applyBtn">Apply Color</button>
</div>
*/
// Click button or press Enter → set box background to input value
// 👇 YOUR CODE HERE:


// ---------- EXERCISE 3: Simple To-Do ----------
/*
<div id="todoApp">
  <input type="text" id="todoInput" placeholder="Add a task">
  <button id="addBtn">Add</button>
  <ul id="todoList"></ul>
</div>
*/
// Add creates <li>, click toggles "done" class (strikethrough)
// 👇 YOUR CODE HERE:


// ---------- EXERCISE 4: Keyboard Events ----------
// Log key pressed, classify as letter/number/Enter, show last 5 keys
// 👇 YOUR CODE HERE:


// ---------- EXERCISE 5: Event Delegation ----------
/*
<div id="actionApp">
  <button data-action="save">Save</button>
  <button data-action="delete">Delete</button>
  <button data-action="edit">Edit</button>
  <button data-action="cancel">Cancel</button>
  <p id="actionOutput">Click a button</p>
</div>
*/
// ONE event listener on parent, read data-action, display it
// 👇 YOUR CODE HERE:


// ---------- 🏆 MINI-CHALLENGE: Interactive To-Do List ----------
/*
Features:
- Add tasks (button or Enter)
- Click to toggle completed (strikethrough)
- Double-click to delete
- Show count of incomplete tasks
- "Clear Completed" button
- Filter: All | Active | Completed
*/
// 👇 YOUR CODE HERE:


// ============================================
// 🎯 SOLUTIONS (inline - run in browser console)
// ============================================
/*

--- Exercise 1 ---
document.querySelector("#title").textContent = "DOM Manipulation";
document.querySelector(".description").textContent = "I changed this!";
const li = document.createElement("li");
li.textContent = "Item 4";
document.querySelector("#list").appendChild(li);
document.querySelector("#changeBtn").addEventListener("click", () => {
  document.querySelector("#title").classList.toggle("highlight");
});

--- Exercise 2 ---
const box = document.querySelector("#colorBox");
const input = document.querySelector("#colorInput");
const btn = document.querySelector("#applyBtn");
function applyColor() {
  box.style.backgroundColor = input.value;
  input.value = "";
}
btn.addEventListener("click", applyColor);
input.addEventListener("keydown", e => { if (e.key === "Enter") applyColor(); });

--- Exercise 3 ---
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
document.querySelector("#addBtn").addEventListener("click", () => {
  if (!input.value.trim()) return;
  const li = document.createElement("li");
  li.textContent = input.value;
  li.addEventListener("click", () => li.classList.toggle("done"));
  list.appendChild(li);
  input.value = "";
});
// CSS: .done { text-decoration: line-through; color: gray; }

--- Exercise 4 ---
let keys = [];
document.addEventListener("keydown", e => {
  keys.push(e.key);
  if (keys.length > 5) keys.shift();
  let type = /^[a-z]$/i.test(e.key) ? "Letter" :
             /^[0-9]$/.test(e.key) ? "Number" : "Other";
  console.log(`${type} pressed: ${e.key}`);
  console.log("Last 5:", keys.join(", "));
});

--- Exercise 5 ---
document.querySelector("#actionApp").addEventListener("click", e => {
  const action = e.target.dataset.action;
  if (action) {
    document.querySelector("#actionOutput").textContent = `Clicked: ${action}`;
  }
});

*/