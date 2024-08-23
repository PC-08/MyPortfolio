let stop_Button = document.getElementById("stopButton");
let ready_Button = document.getElementById("readyButton");
let go_Button = document.getElementById("goButton");

let stop_Light = document.getElementById("stopLight");
let ready_Light = document.getElementById("readyLight");
let go_Light = document.getElementById("goLight");

function stop() {
    stop_Button.style.backgroundColor = "#cf1124";
    stop_Light.style.backgroundColor = "#cf1124";

    ready_Button.style.backgroundColor = "#1f1d41";
    ready_Light.style.backgroundColor = "#4b5069";

    go_Button.style.backgroundColor = "#1f1d41";
    go_Light.style.backgroundColor = "#4b5069";
}

function ready() {
    ready_Button.style.backgroundColor = "#f7c948";
    ready_Light.style.backgroundColor = "#f7c948";

    stop_Button.style.backgroundColor = "#1f1d41";
    stop_Light.style.backgroundColor = "#4b5069";

    go_Button.style.backgroundColor = "#1f1d41";
    go_Light.style.backgroundColor = "#4b5069";
}

function go() {
    go_Button.style.backgroundColor = "#199473";
    go_Light.style.backgroundColor = "#199473";

    ready_Button.style.backgroundColor = "#1f1d41";
    ready_Light.style.backgroundColor = "#4b5069";

    stop_Button.style.backgroundColor = "#1f1d41";
    stop_Light.style.backgroundColor = "#4b5069";


}