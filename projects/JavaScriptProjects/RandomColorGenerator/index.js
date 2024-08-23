let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bg = document.getElementById("bgContainer");
let btn = document.getElementById("button");


btn.onclick = function() {
    let len = bgColorsArray.length;
    let random = Math.ceil(Math.random() * len);
    if (random > (len - 1)) {
        bg.style.backgroundColor = bgColorsArray[random - 1];
    } else {
        bg.style.backgroundColor = bgColorsArray[random];
    }
}