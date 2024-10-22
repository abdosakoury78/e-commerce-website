let formRegist = document.querySelector(".container form");
let password = document.getElementById("password");
let checkPassword = document.getElementById("checkPassword");
let errorMsg = document.querySelector(".error-message");


let users = JSON.parse(localStorage.getItem("data")) || [];

formRegist.addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let dataObj = Object.fromEntries(formData);

    for(let user of users) {
        if(user.username === dataObj.username) {
            errorMsg.textContent = "Username is used";
            return;
        } else if(user.password === dataObj.password) {
            errorMsg.textContent = "Password is used";
            return
        }
        else {
            errorMsg.textContent = "";
            break;
        }
    }
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
    dataObj.address = "";
    dataObj.phone = "";
    users.push(dataObj);
    localStorage.setItem("data", JSON.stringify(users));

    formRegist.reset();
    document.querySelector(".alert").style.top = "100px";

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


function closeAlert() {
    document.querySelector(".alert").style.top = "-70px";
  }