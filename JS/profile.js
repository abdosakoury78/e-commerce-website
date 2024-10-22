let displayImage = document.getElementById("displayImage");

let profileUsername = document.getElementById("profileUsername");
let profilePassword = document.getElementById("profilePassword");
let profileEmail = document.getElementById("profileEmail");
let profileAddress = document.getElementById("profileAddress");
let profilePhone = document.getElementById("profilePhone");




let h3User = document.querySelector(".h3User");
let pEmail = document.querySelector(".pEmail");

function setProfile() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
        profileUsername.value = user.username;
        profilePassword.value = user.password;
        profileEmail.value = user.email;
        profileAddress.value = user.address || "";
        profilePhone.value = user.phone || "";
        h3User.textContent = user.username;
        pEmail.textContent = user.email;
    }
}

setProfile();

window.addEventListener('load', function() {
    setProfile();
});

let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener('click', function() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
        let users = JSON.parse(localStorage.getItem("data")) || [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === user.username) {
                users[i].username = profileUsername.value;
                users[i].password = profilePassword.value;
                users[i].email = profileEmail.value;
                users[i].address = profileAddress.value;
                users[i].phone = profilePhone.value;
                users[i].imgSrc = user.imgSrc;


                localStorage.setItem("currentUser", JSON.stringify(users[i]));
                break;
            }
        }

        document.querySelector(".alert").style.top = "100px";
        localStorage.setItem("data", JSON.stringify(users));


    }
});


function closeAlert() {
    document.querySelector(".alert").style.top = "0px";
  }
