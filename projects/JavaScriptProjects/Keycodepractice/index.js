let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

userInput.addEventListener("keyup", function(Event) {
    let liitem = document.createElement("li");
    liitem.textContent = Event.keyCode;
    keyCodeList.appendChild(liitem);
});