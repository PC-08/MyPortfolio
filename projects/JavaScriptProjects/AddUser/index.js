let addUserForm = document.getElementById("addUserForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");
let status = document.getElementById("status");
let genderMale = document.getElementById("genderMale");
let genderFemale = document.getElementById("genderFemale");


let formData = {
    name: "",
    email: "",
    status: "active",
    gender: "male"
};

function validateForm() {
    if (formData.name === "") {
        nameErrMsg.textContent = "*Requried";
    }
    if (formData.email === "") {
        emailErrMsg.textContent = "*Requried";
    }

}

function submituserForm() {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 121ac5033d405697e421ea7455795e949ba815722cb6287d500d62f21d193d98"
        },

        body: JSON.stringify(formData)
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsg.textContent = "Email Has Already Taken";
                }
            } else {
                emailErrMsg.textContent = "";
            }
            console.log(jsonData);
        });
}

name.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "*Requried";
    } else {
        nameErrMsg.textContent = "";
    }
    formData.name = event.target.value;
});

email.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "*Requried";
    } else {
        emailErrMsg.textContent = "";
    }
    formData.email = event.target.value;

});

status.addEventListener("change", function(event) {
    formData.status = event.target.value;

});

genderMale.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemale.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

addUserForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
    submituserForm();
});