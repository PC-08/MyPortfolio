let spinner = document.getElementById("spinner");
let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");

function CreateAndAppendSearchresult(each_Result) {
    let {
        title,
        link,
        description
    } = each_Result;
    // div ele add class resultitem
    let result_item = document.createElement("div");
    result_item.classList.add("result-item")
    searchResults.appendChild(result_item);
    // name-tittle
    let result_title = document.createElement("a");
    result_title.classList.add("result-title");
    result_title.href = link;
    result_title.target = "_blank";
    result_title.textContent = title;
    result_item.appendChild(result_title);
    //break
    let titleBreak = document.createElement("br");
    result_item.appendChild(titleBreak);
    //url 
    let result_link = document.createElement("a");
    result_link.classList.add("result-url");
    result_link.href = link;
    result_link.target = "_blank";
    result_link.textContent = link;
    result_item.appendChild(result_link);
    //break
    let breakEle = document.createElement("br");
    result_item.appendChild(breakEle);
    //desc 
    let result_desc = document.createElement("p");
    result_desc.textContent = description;
    result_desc.classList.add("result_description");
    result_item.appendChild(result_desc);

}


function display(search_Results_data) {
    spinner.classList.toggle("d-none");
    for (let each of search_Results_data) {
        CreateAndAppendSearchresult(each);
    }
}

function getWord(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        searchResults.textContent = "";
        let search_word = searchInput.value;
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + search_word;

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                display(search_results);
            });
    }
}

searchInput.addEventListener("keydown", getWord);