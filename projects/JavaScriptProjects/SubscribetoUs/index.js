let subscribeForm = document.getElementById("subscribeForm");
let nameEle = document.getElementById("name");
let email = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");


nameEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Requried*";
    } else {
        nameErrMsg.textContent = "";
    }
});

email.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Requried*";
    } else {
        emailErrMsg.textContent = "";
    }
});

subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
})