let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function getFacts(Event) {
    if (Event.key === "Enter") {
        spinner.classList.toggle("d-none");
        let userValue = userInput.value;
        if (userValue === "") {
            alert("enter a number");
            return;
        }

        let url = "https://apis.ccbp.in/numbers-fact?number=" + userValue;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(fact_res) {
                spinner.classList.toggle("d-none");
                fact.textContent = fact_res.fact;
            });
    }

}

userInput.addEventListener("keydown", getFacts);