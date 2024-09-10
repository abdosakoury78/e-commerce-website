
let productsContainer = document.getElementById("products-container");
// let numOfCarts = document.querySelector(".numOfCarts");
let shoppingProduct = document.querySelector(".shopping-cart .empty")

async function getProducts() {
    let products = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json());


    for (let ele of products) {
        if (ele.id === 4) break;
        productsContainer.innerHTML +=
        `<div class="product">
            <img src="${ele.image}" alt="${ele.title}" class = "image"/>
            <p>${ele.title}</p>
            <p>Price: $${ele.price}</p>
            <button class="btn shop">Shop Now</button>
        </div>`;
    }

    let btnShop = document.querySelectorAll(".product .shop");
    let i = -1;
    btnShop.forEach(function(button, index) {
        button.addEventListener('click', function() {
            location.assign("../products.html");
        })
    })
}

// localStorage.clear();
getProducts();

function getCarts() {
    shoppingProduct.innerHTML = "";
    let storedProducts = localStorage.getItem("StoredProducts");
    let quantity = JSON.parse(localStorage.getItem("freqClicks"));
    if(storedProducts) {
        let productArr = JSON.parse(storedProducts);

        shoppingProduct.classList.add("product");
        shoppingProduct.classList.remove("empty");

        for(let item of productArr) {
            shoppingProduct.innerHTML += `
            <div class="item row">
                <div class="priceTitle col-6">
                    <p>${item.title}</p>
                    <p>Price: $${item.price}</p>
                </div>
                <div class="plusMinus col-5">
                    <p>Quantity: ${quantity[item.id - 1]}</p>
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-solid fa-minus"></i>
                </div>
                <div class="remove col-1">
                    <i class="fa-solid fa-circle-xmark" style = "cursor: pointer"></i>
                </div>
            </div>`;
        }
    }
    else {
        shoppingProduct.classList.add("empty");
        shoppingProduct.classList.remove("product");
        shoppingProduct.innerHTML = "<p>No products in the cart.</p>";
    }
}

window.addEventListener('load', getCarts);



window.addEventListener('scroll', function() {
        if(window.scrollY > 300) {
            if(this.window.innerWidth > 768) {
                cartbtn.addEventListener('click', function() {
                    shoppingCart.style.transform = "translateX(-120px)";
                });

                closebtn.addEventListener('click', function() {
                    shoppingCart.style.transform = "translateX(550px)";
                });
            }
    }
    else {
        cartbtn.addEventListener('click', function() {
            shoppingCart.style.transform = "translateX(0px)";
        });

        closebtn.addEventListener('click', function() {
            shoppingCart.style.transform = "translateX(550px)";
        });
    }
})