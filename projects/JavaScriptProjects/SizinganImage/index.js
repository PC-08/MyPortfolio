let imageElement = document.getElementById("image");

let defaultImageWidth = 200;
let orinal_size = 200;
imageElement.style.width = orinal_size + "px";

let width_indicator = document.getElementById("imageWidth");
let error_msg = document.getElementById("warningMessage");

let max_size = 300;
let min_size = 100;


function Onincrement() {
    if (orinal_size >= 300) {
        error_msg.textContent = "Too Big. decrease the size of image.";
    } else {
        error_msg.textContent = "";
        orinal_size = orinal_size + 5;
        imageElement.style.width = orinal_size + "px";
        width_indicator.textContent = orinal_size + "px";
    }
}

function Ondecrement() {
    if (orinal_size <= 100) {
        error_msg.textContent = "can't visible. increase the size of image.";
    } else {
        error_msg.textContent = "";
        orinal_size = orinal_size - 5;
        imageElement.style.width = orinal_size + "px";
        width_indicator.textContent = orinal_size + "px";
    }
}