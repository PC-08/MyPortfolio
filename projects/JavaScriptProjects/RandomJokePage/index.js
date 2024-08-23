let spinner = document.getElementById("spinner");
let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");

function getRandomJoke() {
    spinner.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(joke) {
            spinner.classList.toggle("d-none");
            jokeText.textContent = joke.value;
        });
}


jokeBtn.addEventListener("click", getRandomJoke);