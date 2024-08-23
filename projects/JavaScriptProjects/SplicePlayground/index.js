let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");

let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");


spliceBtn.onclick = function() {
    let startIndexValue = startIndexInput.value;
    let deleteCountValue = deleteCountInput.value;
    let itemToAddValue = itemToAddInput.value;

    if (startIndexValue === "") {
        alert("Enter Value");
        return;
    }

    if (deleteCountValue === "") {
        deleteCountInput.value = 0;
    } else {
        deleteCountInput.value = parseInt(deleteCountValue);
    }

    arr.splice(parseInt(startIndexValue), deleteCountValue, itemToAddValue);

    let stringfed_arr = JSON.stringify(arr);

    updatedArray.textContent = stringfed_arr;

};