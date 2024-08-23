let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");


twentySecondsBtn.addEventListener("click", function() {
    let timer = timerText;
    let counter = 20;
    timer.textContent = counter + " seconds left";
    let TewntyId = setInterval(function() {
        counter = counter - 1;
        timerText.textContent = counter+" seconds left";
        if (counter === -1) {
            clearInterval(TewntyId);
            timerText.textContent = "Your moment is complete.";
        }
    }, 1000);


    twentySecondsBtn.addEventListener("click", function() {
        clearInterval(TewntyId);
    });

    thirtySecondsBtn.addEventListener("click", function() {
        clearInterval(TewntyId);
    });

    fortySecondsBtn.addEventListener("click", function() {
        clearInterval(TewntyId);
    });

    oneMinuteBtn.addEventListener("click", function() {
        clearInterval(TewntyId);
    });



});


thirtySecondsBtn.addEventListener("click", function() {
    let counter = 30;
    timerText.textContent = counter + " seconds left";
    let TimerId = setInterval(function() {
         timerText.textContent = counter+" seconds left";
        counter = counter - 1;
        if (counter === -1) {
            clearInterval(TimerId);
            timerText.textContent = "Your moment is complete.";
        }
    }, 1000);



    twentySecondsBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });

    fortySecondsBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });

    oneMinuteBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });



});


fortySecondsBtn.addEventListener("click", function() {
    let counter = 40;
    timerText.textContent = counter + " seconds left";
    let TimerId = setInterval(function() {
        counter = counter - 1;
         timerText.textContent = counter+" seconds left";
        if (counter === -1) {
            clearInterval(TimerId);
            timerText.textContent = "Your moment is complete.";
        }
    }, 1000);



    twentySecondsBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });

    thirtySecondsBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });

    oneMinuteBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });



});


oneMinuteBtn.addEventListener("click", function() {
    let counter = 60;
    timerText.textContent = counter + " seconds left";
    let TimerId = setInterval(function() {
        counter = counter - 1;
         timerText.textContent = counter+" seconds left";
        if (counter === -1) {
            clearInterval(TimerId);
            timerText.textContent = "Your moment is complete.";
        }
    }, 1000);



    twentySecondsBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });

    thirtySecondsBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });

    fortySecondsBtn.addEventListener("click", function() {
        clearInterval(TimerId);
    });



});