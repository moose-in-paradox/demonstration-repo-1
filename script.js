// Small, deliberately simple script for demo purposes.
// Logs a friendly greeting and the current year in the footer.

function getGreeting(name) {
  if (!name) {
    return "Hello, team!";
  }
  return `Hello, ${name}!`;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(getGreeting());

  const footer = document.querySelector(".site-footer p");
  if (footer) {
    const year = new Date().getFullYear();
    footer.textContent += ` (${year})`;
  }
});