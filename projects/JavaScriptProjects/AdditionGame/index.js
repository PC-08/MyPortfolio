let firstNum = document.getElementById("firstNumber");
let secondNum = document.getElementById("secondNumber");



let userInput = document.getElementById("userInput");
let game_result = document.getElementById("gameResult");


function check() {
    let frn = firstNum.textContent;
    let srn = secondNum.textContent
    let Final_ans = parseInt(frn) + parseInt(srn);
    let user_ans = parseInt(userInput.value);
    if (user_ans === Final_ans) {
        game_result.textContent = "congratulations you got it right";
        game_result.style.backgroundColor = "green";

    } else {
        game_result.textContent = "Please Try Again!";
        game_result.style.backgroundColor = "blue";
    }

}

function restart() {
    let fn = Math.ceil(Math.random() * 100);
    let sn = Math.ceil(Math.random() * 100);
    firstNum.textContent = fn;
    secondNum.textContent = sn;
    game_result.textContent = "";
    userInput.value = "";
}

restart();