let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");
let convertBtn = document.getElementById("convertBtn");


convertBtn.addEventListener("click", function() {
    let hoursValue = hoursInput.value;
    let minutesValue = minutesInput.value;

    if (hoursValue === "") {
        errorMsg.textContent = "Please enter a valid hours value.";
        return;
    } else if (minutesValue === "") {
        errorMsg.textContent = "Please enter a valid Minutes value.";
        return;
    }

    let convert_timeInSeconds = (parseInt(hoursValue) * 3600) + (parseInt(minutesValue) * 60);
    errorMsg.textContent = "";
    timeInSeconds.classList.add("ans_para");
    timeInSeconds.textContent = convert_timeInSeconds + "s";
});