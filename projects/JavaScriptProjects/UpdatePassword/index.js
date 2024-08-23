let updatePasswordForm = document.getElementById("updatePasswordForm");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");

function sumbit() {
    updatePasswordForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (newPassword.value === "") {
            newPasswordErrMsg.textContent = "Requried*";
        } else {
            newPasswordErrMsg.textContent = "";
        }

        if (confirmPassword.value === "") {
            confirmPasswordErrMsg.textContent = "Requried*";
        } else {
            confirmPasswordErrMsg.textContent = "";
        }

        if (newPassword.value === confirmPassword.value) {
            confirmPasswordErrMsg.textContent = "";
        } else {
            confirmPasswordErrMsg.textContent = "Passwords must be same";
        }
    });

}

newPassword.addEventListener("blur", function(event) {
    if (newPassword.value === "") {
        newPasswordErrMsg.textContent = "Requried*";
    } else {
        newPasswordErrMsg.textContent = "";
    }
    sumbit();
});

confirmPassword.addEventListener("blur", function(event) {
    if (confirmPassword.value === "") {
        confirmPasswordErrMsg.textContent = "Requried*";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
    sumbit();
});