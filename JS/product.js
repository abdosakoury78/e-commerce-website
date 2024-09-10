
let itemImg = document.querySelector(".item-image");
let itemInfo = document.querySelector(".item-info ");



window.addEventListener('load', function() {
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if(selectedProduct) {
        itemImg.innerHTML = `                <div class="sm-imgs">
                <img src="Images/id${selectedProduct.id}/img0.avif" alt="">
                <img src="Images/id${selectedProduct.id}/img1.avif" alt="">
                <img src="Images/id${selectedProduct.id}/img2.webp" alt="">
            </div>
            <div class="big-img">
                <img src="Images/id${selectedProduct.id}/img2.webp" alt="">
            </div>`
            itemInfo.innerHTML = `<h2>${selectedProduct.title}</h2>
            <h3>Price: $${selectedProduct.price}</h3>
            <p>Description: ${selectedProduct.description}</p>
            <button class="shopAdd-btn">Add To Cart</button>`
    }
    let smImgs = document.querySelectorAll(".sm-imgs img");
    let bigImg = document.querySelector('.big-img img');
    smImgs.forEach(function(img) {
        img.addEventListener('click', function() {
            bigImg.src = img.src;
        })
    })
})


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