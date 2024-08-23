let questionsForm = document.getElementById("questionsForm");
let resultMsg = document.getElementById("resultMsg");
let submitBtn = document.getElementById("submitBtn");

let respicken = "";

questionsForm.addEventListener("submit", function(event) {
    event.preventDefault();
})

questionsForm.addEventListener("change", function(event) {
    respicken = event.target.value;

});


submitBtn.addEventListener("click", function() {
    if (respicken === "") {
        resultMsg.textContent = "Please select a answer!";
        return;
    }
    if (respicken === "Delhi") {
        resultMsg.textContent = "Correct answer!";
        resultMsg.style.color = "green";
    } else {
        resultMsg.textContent = "Wrong answer!";
    }
})