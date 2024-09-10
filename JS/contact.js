let form = document.querySelector(".form form");
let name = document.querySelector("[type = text]");
let email = document.querySelector("[type = email]");
let message = document.querySelector("[name = Message]");
let showMes = document.querySelector(".sentMes");
let mes = document.querySelector(".message");

let messObj;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(name.value);
    form.style.display = "none";
    showMes.style.display = "block";
    mes.innerHTML = `
    <p class = "pargh"><span>Name:</span> ${name.value}</p>
    <p class = "pargh"><span>Email:</span> ${email.value}</p>
    <p class = "pargh"><span>Message:</span> ${message.value}</p>
    <p class = "link">Write another message</p>
    `;
    messObj = {
        name : name.value,
        email : email.value,
        message : message.value,
    };
    localStorage.setItem("MessObj", JSON.stringify(messObj));
    name.value = "";
    email.value = "";
    message.value = "";
    let writeAnotherMes = document.querySelector(".message .link");
    writeAnotherMes.addEventListener('click', function() {
        form.style.display = "block";
        showMes.style.display = "none";
        localStorage.removeItem("MessObj");
    })
})

window.addEventListener('load', function() {
    let savedMessage = JSON.parse(localStorage.getItem("MessObj"));
    if (savedMessage === null) {
        form.style.display = "block";
        showMes.style.display = "none";
    } else {
        form.style.display = "none";
        showMes.style.display = "block";
        mes.innerHTML = `
        <p class="pargh"><span>Name:</span> ${savedMessage.name}</p>
        <p class="pargh"><span>Email:</span> ${savedMessage.email}</p>
        <p class="pargh"><span>Message:</span> ${savedMessage.message}</p>
        <p class="link">Write another message</p>
        `;
        let writeAnotherMes = document.querySelector(".message .link");
        writeAnotherMes.addEventListener('click', function() {
            form.style.display = "block";
            showMes.style.display = "none";
            localStorage.removeItem("MessObj");
        });
    }
})
