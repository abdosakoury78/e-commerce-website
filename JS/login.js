let formLogin = document.querySelector(".formLogin");
let username = document.querySelector(".formLogin #username");
let password = document.querySelector(".pass #password");
let loginBtnForm = document.querySelector("#loginForm");
let userIcon = document.getElementById("user");
let logout = document.getElementById("logout");
let errorMsg = document.querySelector(".error-message");


let users = JSON.parse(localStorage.getItem("data")) || [];



formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    if (users.length === 0) {
        errorMsg.textContent = "No registered users found.";
        return;
    }

    let userFound = false;
    for(let user of users) {
        if(user.username === username.value && user.password === password.value) {
            username.value = "";
            password.value = "";
            overlayLog.style.height = 0;
            formLogin.style.display = "none";
            body.style.overflowY = "visible";
            closeLog.style.visibility = "hidden";
            loginBtn.style.display = "none";
            loginBtn2.style.display = "none";
            localStorage.setItem("login", true);
            userIcon.style.display = "inline-block";
            logout.style.display = "inline-block";
            userFound = true;
            errorMsg.textContent = "";
            localStorage.setItem("currentUser", JSON.stringify(user));
            break;
        }
    }

    if (!userFound) {
        errorMsg.textContent = "Invalid username or password.";
    }

});


window.addEventListener('load', function() {
    let isLoggedIn = localStorage.getItem("login");

    if (isLoggedIn === "true") {
        userIcon.style.display = "inline-block";
        logout.style.display = "inline-block";
        loginBtn.style.display = "none";
        loginBtn2.style.display = "none";
    } else if (isLoggedIn === "false" || isLoggedIn === null) {
        userIcon.style.display = "none";
        logout.style.display = "none";
        if (window.innerWidth < 768) {
            if (isLoggedIn === "false" || isLoggedIn === null) {
                loginBtn2.style.display = "inline-block";
                loginBtn.style.display = "none";
            }
        } else {
            if (isLoggedIn === "false" || isLoggedIn === null) {
                loginBtn.style.display = "inline-block";
                loginBtn2.style.display = "none";
            }
        }
    }
});

logout.addEventListener('click', function() {
    localStorage.setItem("login", "false");
    let loggedInUser = localStorage.getItem("login");
    userIcon.style.display = "none";
    logout.style.display = "none";
    loginBtn.style.display = "inline-block";
    loginBtn2.style.display = "none";
    if (window.innerWidth < 768) {
        if (loggedInUser === "false" || loggedInUser === null) {
            loginBtn2.style.display = "inline-block";
            loginBtn.style.display = "none";
        }
    } else {
        if (loggedInUser === "false" || loggedInUser === null) {
            loginBtn.style.display = "inline-block";
            loginBtn2.style.display = "none";
        }
    }

    localStorage.removeItem("currentUser");
    location.assign("index.html");
});

window.addEventListener('resize', function() {
    let loggedInUser = localStorage.getItem("login");

    if (window.innerWidth < 768) {
        if (loggedInUser === "false" || loggedInUser === null) {
            loginBtn2.style.display = "inline-block";
            loginBtn.style.display = "none";
        }
    } else {
        if (loggedInUser === "false" || loggedInUser === null) {
            loginBtn.style.display = "inline-block";
            loginBtn2.style.display = "none";
        }
    }
});

userIcon.addEventListener('click', function() {
    location.assign("../profile.html");
})