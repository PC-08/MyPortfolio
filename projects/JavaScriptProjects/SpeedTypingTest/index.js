let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let resetBtn = document.getElementById("resetBtn");
let submitBtn = document.getElementById("submitBtn");
let spinner = document.getElementById("spinner");


let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};

let quote = "";


fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        quoteDisplay.textContent = jsonData.content;
        quote = jsonData.content;
        console.log(jsonData);
    });

let count = 0;


let timer_id = setInterval(function() {
    count = count + 1;
    timer.textContent = count;
    console.log(count);
}, 1000);




submitBtn.addEventListener("click", function() {
    let userValue = quoteInput.value;
    if (userValue === quote) {
        clearInterval(timer_id);
        result.textContent = "You Typed in " + count + " Seconds";
    } else {
        result.textContent = "you typped incorrect answer";
    }
});

resetBtn.addEventListener("click", function() {
    spinner.classList.remove("d-none");
    count = 0;
    clearInterval(timer_id);
     timer_id = setInterval(function() {
    count = count + 1;
    timer.textContent = count;
    console.log(count);
}, 1000);
    result.textContent = "";
    quoteDisplay.textContent = "";
    quoteInput.value = "";
    quote = "";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.textContent = jsonData.content;
            quote = jsonData.content;
            console.log(jsonData);
        });
});