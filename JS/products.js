
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





let productsContainer = document.getElementById("products-container");
let numOfCarts = document.querySelector(".numOfCarts");
let shoppingProduct = document.querySelector(".shopping-cart .empty")
let freqBtn = new Array(8).fill(0);
let btnId = [];

async function getProducts() {
    let products = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json());


    for (let ele of products) {
        if (ele.id === 9) break;
        productsContainer.innerHTML +=
        `<div class="product">
            <a href = "product.html"><img src="${ele.image}" alt="${ele.title}" class = "image"/></a>
            <p>${ele.title}</p>
            <p>Price: $${ele.price}</p>
            <button class="btn">Add To Cart</button>
        </div>`;
    }

    let images = document.querySelectorAll(".product .image");
    let btnAdd = document.querySelectorAll(".product .btn");
    let i = -1;
    btnAdd.forEach(function(button, index) {
        button.addEventListener('click', function() {
            numOfCarts.innerHTML++;
            freqBtn[index]++;
            if(i === -1) {
                btnId.push(index + 1);
                i++;
            } else if(btnId[i] !== index + 1) {
                btnId.push(index + 1);
                i++;
            }
            updateCart(btnId, freqBtn, products);
            localStorage.setItem("freqClicks", JSON.stringify(freqBtn));
        })
    })

    images.forEach(function(image, index) {
        image.addEventListener('click', function() {
            let product = products[index];
            localStorage.setItem('selectedProduct', JSON.stringify(product));
        });
    });

}

// localStorage.clear();
getProducts();

function updateCart(btnId, freqBtn, products) {
    shoppingProduct.innerHTML = "";
    let arrProducts = JSON.parse(localStorage.getItem("StoredProducts")) || [];

    if (btnId.length === 0) {
        shoppingProduct.classList.add("empty");
        shoppingProduct.classList.remove("product");
    }
    else {
        shoppingProduct.classList.add("product");
        shoppingProduct.classList.remove("empty");
        btnId.forEach(function(id) {
            let product = products.find(ele => ele.id === id);
            arrProducts.push((product));
            // console.log(arrProducts);
            if (product) {
                shoppingProduct.innerHTML += `
                <div class="item row">
                    <div class="priceTitle col-6">
                        <p>${product.title}</p>
                        <p>Price: $${product.price}</p>
                    </div>
                    <div class="plusMinus col-5">
                        <p>Quantity: ${freqBtn[id - 1]}</p>
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                    </div>
                    <div class="remove col-1">
                        <i class="fa-solid fa-circle-xmark" style = "cursor: pointer"></i>
                    </div>
                </div>`;
            }
        });
        // console.log(localStorage.getItem("StoredProducts"))
    }
    arrProducts = arrProducts.filter((product, index, arr) =>
        index === arr.findIndex(p => p.id === product.id)
    );
    localStorage.setItem("StoredProducts", JSON.stringify(arrProducts));
}

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

