const messages = [
  "You’re allowed to take your time. Progress isn’t a race.",
  "Clarity comes from understanding, not pressure.",
  "Careers aren’t linear — and that’s okay.",
  "Small, intentional steps compound over time.",
  "You don’t need to know everything. Just what’s next."
];

const el = document.getElementById("motivation");

if (el) {
  const random = Math.floor(Math.random() * messages.length);
  el.textContent = messages[random];
}