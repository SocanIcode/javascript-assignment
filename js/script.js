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
// Add product to cart functionality
document.querySelector(".button-cta").addEventListener("click", function (e) {
  e.preventDefault();

  // Get selected product details
  const productName = document.querySelector(".pro-details h4").innerText;
  const productPrice = document.querySelector(".pro-details h2").innerText;
  const productSize = document.querySelector(".pro-details select").value;
  const quantity = document.querySelector(".quantity-input").value;

  // Check if a size is selected
  if (productSize === "Select Size") {
    alert("Please select a size for the product!");
    return;
  }

  // Create product object
  const product = {
    name: productName,
    price: productPrice,
    size: productSize,
    quantity: quantity,
  };

  // Save product to localStorage (or an array)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
});

fetch("/path/to/products.json")
  .then((response) => response.json())
  .then((data) => {
    const productContainer = document.getElementById("proview");

    // Loop through each product and display it
    data.forEach((product) => {
      const productElement = document.createElement("section");
      productElement.classList.add("product-container");
      productElement.classList.add("section-gap");
      productElement.innerHTML = `
        <div class="pro-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="pro-details">
          <h6>${product.category}</h6>
          <h4>${product.name}</h4>
          <h2>${product.price}</h2>
          <select>
            <option>Select Size</option>
            ${product.sizes.map((size) => `<option>${size}</option>`).join("")}
          </select>
          <input type="number" value="1" min="1" class="quantity-input" />
          <a class="button-cta" href="#">Add to Cart</a>
          <h4>Product Description</h4>
          <p>${product.description}</p>
        </div>
      `;
      productContainer.appendChild(productElement);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
