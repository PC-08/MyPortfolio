let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");
let startBtn = document.getElementById("startBtn");


startBtn.addEventListener("click", function() {
    let fromuserValue = fromUserInput.value;
    let touserValue = toUserInput.value;

    if (fromuserValue === "" || touserValue === "") {
        alert("please Enter Both Values !");
        return;
    }


    let counterStart = parseInt(fromuserValue);
    let counterEnd = parseInt(touserValue);

    if (counterStart > counterEnd) {
        counterText.textContent = counterStart;
        return;
    }else {
        let CounterId = setInterval(function() {
        counterText.textContent = counterStart;
        counterStart = counterStart + 1;
        console.log("yes");
         if (counterStart === counterEnd+1) {
        clearInterval(CounterId);
        
    }
    }, 1000);

   
    }

   
    
});