let formRegist = document.querySelector(".container form");
let password = document.getElementById("password");
let checkPassword = document.getElementById("checkPassword");


let users = [];

formRegist.addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let dataObj = Object.fromEntries(formData);
    if(dataObj.password !== dataObj.checkPassword) {
        password.style.borderColor = "red";
        checkPassword.style.borderColor = "red";
        password.value = "";
        checkPassword.value = "";
        password.placeholder = "Password dosen't match";
        checkPassword.placeholder = "Password dosen't match";
        password.classList.add("error");
        checkPassword.classList.add("error");
        return;
    }
    else {
        password.style.borderColor = "white";
        checkPassword.style.borderColor = "white";
        password.placeholder = "Password";
        checkPassword.placeholder = "Confirm Password";
        password.classList.remove("error");
        checkPassword.classList.remove("error");
    }
    users.push(dataObj);
    localStorage.setItem("data", JSON.stringify(users));

    alert("Registration successful!");
    formRegist.reset(); // Clears the form inputs

    location.assign("../index.html");
})

let links = document.querySelector(".links");
let listbtn = document.getElementById("list");


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