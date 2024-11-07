const bar = document.querySelector("#bar");
const exit = document.querySelector("#exit");
const nav = document.querySelector(".navbar");

bar.addEventListener("click", () => {
  nav.classList.add("active"); // Adds a class to show or activate the navbar
});

exit.addEventListener("click", () => {
  nav.classList.remove("active"); // Removes the class to hide or deactivate the navbar
});
