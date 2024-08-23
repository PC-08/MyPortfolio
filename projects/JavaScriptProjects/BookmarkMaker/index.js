// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");


let siteName = "";
let siteUrl = "";


function addBookmark() {
    if (siteName === "") {
        siteNameErrMsg.textContent = "Requried*";
        return;
    } else {
        siteNameErrMsg.textContent = "";
    }

    if (siteUrl === "") {
        siteUrlErrMsg.textContent = "Requried*";
        return;
    } else {
        siteUrlErrMsg.textContent = "";
    }

    let bookmark_container = document.createElement("li");
    bookmark_container.classList.add("bookmark-item");
    bookmarksList.appendChild(bookmark_container);

    let bookmark_heading = document.createElement("p");
    bookmark_heading.classList.add("bookmark-item-head");
    bookmark_heading.textContent = siteName;
    bookmark_container.appendChild(bookmark_heading);

    let bookmarks_url = document.createElement("a");
    bookmarks_url.textContent = siteUrl;
    bookmarks_url.target = "_blank";
    bookmarks_url.href = siteUrl;
    bookmark_container.appendChild(bookmarks_url);



}


siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Requried*";
    } else {
        siteNameErrMsg.textContent = "";
    }

    siteName = event.target.value;
});

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Requried*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
    siteUrl = event.target.value;
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark();
});