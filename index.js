// Sample data for products
const products = [
    { name: "Diamond Necklace", price: "$1000", image: "diamond_necklace.jpg" },
    { name: "Gold Bracelet", price: "$500", image: "gold_bracelet.jpg" },
    { name: "Silver Earrings", price: "$200", image: "silver_earrings.jpg" }
];

// Function to display products
function displayProducts() {
    const productsDiv = document.getElementById("products");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        const image = document.createElement("img");
        image.src = "images/" + product.image;
        image.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = "Price: " + product.price;

        productCard.appendChild(image);
        productCard.appendChild(productName);
        productCard.appendChild(price);

        productsDiv.appendChild(productCard);
    });
}

// Call function to display products when the page loads
window.onload = displayProducts;