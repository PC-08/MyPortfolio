let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let responseBody = document.getElementById("responseBody");
let responseStatus = document.getElementById("responseStatus");

let url = "https://gorest.co.in/public-api/users";

let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 121ac5033d405697e421ea7455795e949ba815722cb6287d500d62f21d193d98"
    },
    body: ""
};

function submitData() {
    console.log(options)
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData)
            responseStatus.value = jsonData.code;
            responseBody.value = JSON.stringify(jsonData);
        });
}




requestBody.addEventListener("change", function(event) {
    options.body = event.target.value;
});

requestMethod.addEventListener("change", function(event) {
    options.method = event.target.value;
    console.log(event.target.value)
});

function validate() {
    if (url === "") {
        requestUrlErrMsg.textContent = "*Requried";
    } else {
        requestUrlErrMsg.textContent = "";
    }
}

requestUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        requestUrlErrMsg.textContent = "*Requried";
    } else {
        requestUrlErrMsg.textContent = "";
    }
    url = event.target.value;
    console.log(event.target.value)
});

consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validate();
    responseStatus.value = "";
    responseBody.value = "";
    submitData();
});