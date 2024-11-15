// Adds  and remove button for a small screen
const bar = document.querySelector("#bar");
const exit = document.querySelector("#exit");
const nav = document.querySelector(".navbar");

//to show or activate the navbar

bar.addEventListener("click", () => {
  nav.classList.add("active");
});

// Removes the class to hide or deactivate the navbar

exit.addEventListener("click", () => {
  nav.classList.remove("active");
});
//Sorting product by catgies
document
  .getElementById("toggleDropdown")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    const dropdown = this.querySelector(".dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

window.onclick = function (event) {
  if (!event.target.closest("#toggleDropdown")) {
    document.querySelector(".dropdown").style.display = "none";
  }
};

function sortProducts(category) {
  if (category === "all") {
    window.location.href = "html/product.html";
  } else if (category === "men") {
    window.location.href = "html/product-catagroies/men.html";
  } else if (category === "women") {
    window.location.href = "html/product-catagroies/women.html";
  }
}

// Function to load product images and data dynamically on the product page// Assuming the product page URL is 'productview.html' and uses URL search params for product ID
document.addEventListener("DOMContentLoaded", function () {
  fetch("data.js")
    .then((response) => response.js())
    .then((products) => {
      const items = document.querySelectorAll(".item-box .item");

      items.forEach((item, index) => {
        item.addEventListener("onclick", function () {
          const productId = index + 1; // Use index to get the product ID
          localStorage.setItem("productId", productId); // Store product ID in localStorage
        });
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data
  fetch("data.js")
    .then((response) => response.js())
    .then((products) => {
      const productId = localStorage.getItem("productId");
      const product = products.find((p) => p.id == productId); // Find the product by ID

      if (product) {
        const mainImage = document.getElementById("mainimg");
        const title = document.querySelector(".pro-details h4");
        const price = document.querySelector(".pro-details h2");
        const description = document.querySelector(".pro-details p");

        // Set the image and text content dynamically
        mainImage.src = product.image;
        mainImage.alt = product.altText;
        title.textContent = product.title;
        price.textContent = product.price;
        description.textContent = product.description;
      } else {
        console.error("Product not found");
      }
    });
});
