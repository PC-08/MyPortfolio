let count_value_ele = document.getElementById("counterValue");
let incrementBtn_ele = document.getElementById("incrementBtn");



let clickCount = localStorage.getItem("clickCount");

let count = 0;


if (clickCount === null) {
    count_value_ele.textContent = 0;
} else {
    count_value_ele.classList.add("count");
    count_value_ele.textContent = clickCount;

}

function toshowCount() {
    let clickCount1 = localStorage.getItem("clickCount");

    count_value_ele.textContent = clickCount1;

}

incrementBtn_ele.onclick = function() {
    count_value_ele.classList.add("count");
    count = count + 1;
    localStorage.setItem("clickCount", count);
    toshowCount();
}