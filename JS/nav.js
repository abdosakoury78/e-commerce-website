let cartbtn = document.getElementById("cart");
let userbtn = document.getElementById("user"); // login || register
let closebtn = document.getElementById("close");
let shoppingCart = document.querySelector(".shopping-cart");
let listbtn = document.getElementById("list");
let links = document.querySelector(".links");
let navbar = document.querySelector(".navbar");
let btnUp = document.getElementById("btn-up");

cartbtn.addEventListener('click', function() {
    shoppingCart.style.transform = "translateX(0px)";
});

closebtn.addEventListener('click', function() {
    shoppingCart.style.transform = "translateX(550px)";
});

function handleResize() {
    if (window.innerWidth > 768) {
        links.style.transform = "translateX(0px)"; // Reset the position on desktop view
    }
    else {
        links.style.transform = "translateX(500px)";
    }
}

window.addEventListener('resize', handleResize);

// Initial check for mobile view
if (window.innerWidth < 768) {
    listbtn.addEventListener('click', function() {
        if (links.style.transform !== "translateX(0px)") {
            links.style.transform = "translateX(0px)";
        } else {
            links.style.transform = "translateX(500px)";
        }
    });
}

window.addEventListener('scroll', function() {
    if(window.scrollY > 300) {
        navbar.classList.add("container-fluid");
        navbar.classList.remove("container-md");
        navbar.classList.remove("p-4");
        btnUp.style.display = "block";
            cartbtn.addEventListener('click', function() {
                shoppingCart.style.transform = "translateX(-120px)";
            });

            closebtn.addEventListener('click', function() {
                shoppingCart.style.transform = "translateX(550px)";
            });
    }
    else {
        navbar.classList.remove("container-fluid");
        navbar.classList.add("container-md");
        navbar.classList.add("p-4");
        btnUp.style.display = "none";
        cartbtn.addEventListener('click', function() {
            shoppingCart.style.transform = "translateX(0px)";
        });

        closebtn.addEventListener('click', function() {
            shoppingCart.style.transform = "translateX(550px)";
        });
    }
})

window.onload = function() {
    if(window.scrollY > 300) {
        navbar.classList.add("container-fluid");
        navbar.classList.remove("container-md");
        navbar.classList.remove("p-4");
        btnUp.style.display = "block";
    }
    else {
        navbar.classList.remove("container-fluid");
        navbar.classList.add("container-md");
        navbar.classList.add("p-4");
        btnUp.style.display = "none"
    }
}



btnUp.addEventListener('click', function() {
    window.scrollTo("", 0);
})
