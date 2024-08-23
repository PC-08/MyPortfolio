let numbers = [17, 31, 77, 20, 63];

let userInputEle = document.getElementById("userInput");
let findBtnEle = document.getElementById("findBtn");
let indexOfNumberEle = document.getElementById("indexOfNumber");

findBtnEle.onclick = function() {
    let user_value = userInputEle.value;
    if (user_value === "") {
        alert("Enter a Value.");
        return;
    } else {
        let ans = numbers.indexOf(parseInt(user_value));
        indexOfNumberEle.textContent = ans;
    }
}