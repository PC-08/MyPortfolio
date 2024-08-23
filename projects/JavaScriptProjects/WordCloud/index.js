let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");


function randomFontSize(word) {
    let span = document.createElement("span");

    let random = Math.ceil(Math.random() * 40);
    console.log(random);
    span.textContent = word;
    span.style.fontSize = random + "px";
    span.classList.add("p-4");
    wordsContainer.appendChild(span);
}

for (let word of wordCloud) {
    randomFontSize(word);
}


addBtn.onclick = function() {
    let userValue = userInput.value;

    if (userValue === "") {
        errorMsg.textContent = "Please Enter a Word";
        return;
    }

    randomFontSize(userValue);



}