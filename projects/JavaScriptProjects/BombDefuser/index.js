let timer = document.getElementById("timer");
let defuser = document.getElementById("defuser");

let counter = 10;

let counterId = setInterval(function() {
    timer.textContent = counter;
    counter = counter - 1;
    if (counter === -1) {
        timer.textContent = "BOOM";
        clearInterval(counterId);
    }
}, 1000);

defuser.addEventListener("keydown", function(Event) {
    let uservalue = defuser.value;
    if (uservalue === "defuse" && Event.key === "Enter") {
        timer.textContent = "You did it!";
        clearInterval(counterId);
    }
});