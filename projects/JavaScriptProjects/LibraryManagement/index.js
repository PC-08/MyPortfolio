let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let res = document.getElementById("res");
let spinner = document.getElementById("spinner");




function addSearchResults(search_results) {

    res.textContent = "Popular Books";
    let {
        author,
        imageLink,
        title
    } = search_results;

    let searchItemContainer = document.createElement("div");
    searchItemContainer.classList.add("col-6", "p-4");
    searchResults.appendChild(searchItemContainer);

    let resimg = document.createElement("img");
    resimg.classList.add("bookimg");
    resimg.src = imageLink;
    searchItemContainer.appendChild(resimg);

    let author_t = document.createElement("p");
    author_t.classList.add("author");
    author_t.textContent = author;
    searchItemContainer.appendChild(author_t);

}

function Display(search_Results) {
    spinner.classList.add("d-none");
    searchResults.textContent = "";
    if (search_Results.length === 0) {
        spinner.classList.add("d-none");
        res.textContent = "No Results Found";

        return;
    }
    for (let each of search_Results) {
        addSearchResults(each);
    }

}

searchInput.addEventListener("keydown", function(event) {

    let searh_value = searchInput.value;
    let url = "https://apis.ccbp.in/book-store?title=" + searh_value;
    let options = {
        method: "GET"
    };

    if (event.key === "Enter") {
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                spinner.classList.remove("d-none");
                console.log(search_results);
                Display(search_results);
            })
    }

});