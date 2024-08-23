let button_ele = document.getElementById("addBtn");
let reviewTextarea_ele = document.getElementById("reviewTextarea");
let titleInput_ele = document.getElementById("titleInput");
let reviewsContainer_ele = document.getElementById("reviewsContainer");

button_ele.onclick = function() {
    let title = titleInput_ele.value;
    let review = reviewTextarea_ele.value;

    if (title === "") {
        alert("Enter Movie title.");
        return;
    } else if (review === "") {
        alert("Enter Movie review.");
        return;
    }

    let heading_ele = document.createElement("h1");
    let para_ele = document.createElement("p");

    heading_ele.textContent = "Movie Title: " + title;
    para_ele.textContent = "Review: " + review;

    heading_ele.classList.add("movie");
    para_ele.classList.add("review");

    reviewsContainer_ele.appendChild(heading_ele);
    reviewsContainer_ele.appendChild(para_ele);

};