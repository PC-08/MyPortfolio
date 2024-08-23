let menuBtn = document.getElementById("menu");
let optcontainer = document.getElementById("opt-container");

menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("fa-xmark");
    optcontainer.classList.toggle("options");
});