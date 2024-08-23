let resultCountries = document.getElementById("resultCountries");
let searchInput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");

let url = "https://apis.ccbp.in/countries-data";
let options = {
    method: "GET"
}

let countries_list = []
console.log(countries_list)

function createAndAppendCountry(each_country) {
    let {
        flag,
        name,
        population
    } = each_country;
    //create containner
    let country_card = document.createElement("span");
    country_card.classList.add("country-card", "row", "col-12", "col-md-6");
    resultCountries.appendChild(country_card);
    //country flag
    let country_img = document.createElement("img");
    country_img.src = flag;
    country_img.classList.add("country-flag");
    country_card.appendChild(country_img);

    //country name and popu container 
    let country_name_and_pop = document.createElement("span");
    country_name_and_pop.classList.add("pl-3");
    country_card.appendChild(country_name_and_pop);
    // country name
    let country_name = document.createElement("h1");
    country_name.classList.add("country-name");
    country_name.textContent = name;
    country_name_and_pop.appendChild(country_name);

    //country population
    let country_pop = document.createElement("p");
    country_pop.textContent = population;
    country_pop.classList.add("country-population");
    country_name_and_pop.appendChild(country_pop);
}


function diaplay(c_array) {

    spinner.classList.toggle("d-none");
    for (let each of c_array) {
        createAndAppendCountry(each);
        countries_list.push(each);
    }

}

function get_search_countries(word) {
    resultCountries.textContent = "";
    let userValue = searchInput.value;

    for (let each of countries_list) {
        let country_name = each.name;
        if (country_name.toLowerCase().includes(word.toLowerCase())) {
            createAndAppendCountry(each);
        }
    }

}

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(c_data) {
        spinner.classList.toggle("d-none");
        diaplay(c_data);
    })


searchInput.addEventListener("keydown", function(event) {

    get_search_countries(searchInput.value);



});