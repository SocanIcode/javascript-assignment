// Select elements
const bar = document.getElementById("bar");
const exit = document.getElementById("exit");
const nav = document.getElementById("navbar");

// Show the navbar when "bar" icon is clicked
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (exit) {
  bar.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
