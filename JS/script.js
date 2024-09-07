
let productsContainer = document.getElementById("products-container");

async function getProducts() {
    let products = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json());

    console.log(products);

    for (let ele of products) {
        if (ele.id === 7) break; // Exits the loop when id is 7
        productsContainer.innerHTML +=
        `<div class="product">
            <img src="${ele.image}" alt="${ele.title}"/>
            <p>${ele.title}</p>
            <p>Price: $${ele.price}</p>
            <button class="btn">Add To Cart</button>
        </div>`;
    }
}


getProducts();


