const bar = document.querySelector("#bar");
const nav = document.querySelector(".navbar");

bar.addEventListener("click", () => {
  nav.classList.add("active"); // Adds a class to show or activate the navbar
});
