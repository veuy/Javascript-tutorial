// ============================================
// 📘 EXERCISES: Module 6 — Async & ES6+
// ============================================

// ---------- EXERCISE 1: Create a wait Promise ----------
function wait(ms) {
  // 👇 Return a Promise that resolves after ms milliseconds
}
console.log("--- Exercise 1 ---");


// ---------- EXERCISE 2: Fetch User Data ----------
const API = "https://jsonplaceholder.typicode.com";
// Fetch user ID 5 and their posts
// 👇 YOUR CODE HERE:
console.log("--- Exercise 2 ---");


// ---------- EXERCISE 3: Fetch with Retry ----------
async function fetchWithRetry(url, maxRetries = 3) {
  // Try fetch, wait 1s on failure, retry up to maxRetries times
  // 👇 YOUR CODE HERE
}
console.log("--- Exercise 3 ---");


// ---------- EXERCISE 4: Promise.all ----------
// Fetch posts with IDs 1-5 simultaneously, log their titles
// 👇 YOUR CODE HERE:
console.log("--- Exercise 4 ---");


// ---------- EXERCISE 5: Optional Chaining & Nullish ----------
const data = {
  user: null,
  settings: { theme: "dark" }
};
// 1. Safely get fontSize (default 16)
// 2. Safely get user.name (default "Guest")
// 3. Safely call a method that might not exist
// 👇 YOUR CODE HERE:
console.log("--- Exercise 5 ---");


// ============================================
// 🎯 SOLUTIONS
// ============================================
/*

--- Exercise 1 ---
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function test() {
  console.log("Waiting...");
  await wait(2000);
  console.log("Done!");
}
test();

--- Exercise 2 ---
async function fetchUser(id) {
  const user = await fetch(`${API}/users/${id}`).then(r => r.json());
  const posts = await fetch(`${API}/users/${id}/posts`).then(r => r.json());
  console.log(`${user.name}'s posts:`);
  posts.forEach(p => console.log(`- ${p.title}`));
}
fetchUser(5);

--- Exercise 3 ---
async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.log(`Attempt ${i + 1} failed: ${err.message}`);
      if (i < maxRetries - 1) await wait(1000);
      else throw err;
    }
  }
}

--- Exercise 4 ---
async function fetchMultiplePosts() {
  const ids = [1, 2, 3, 4, 5];
  const promises = ids.map(id =>
    fetch(`${API}/posts/${id}`).then(r => r.json())
  );
  const posts = await Promise.all(promises);
  posts.forEach(p => console.log(`Post ${p.id}: ${p.title}`));
}
fetchMultiplePosts();

--- Exercise 5 ---
const fontSize = data?.settings?.fontSize ?? 16;
const userName = data?.user?.name ?? "Guest";
const result = data?.method?.() ?? "Method not found";
console.log(fontSize, userName, result); // 16 "Guest" "Method not found"

*/