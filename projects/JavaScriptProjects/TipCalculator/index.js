let bill_Ammount = document.getElementById("billAmount");
let percentage_Tip = document.getElementById("percentageTip");
let tip_Ammount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let error_message = document.getElementById("errorMessage");

function caculate_total() {
    let bill_Ammount_value = (bill_Ammount.value);
    let percentage_Tip_value = (percentage_Tip.value);
    error_message.textContent = "Please Enter a Valid Input.";

    if (bill_Ammount_value === "") {
        error_message;

    } else if (percentage_Tip_value === "") {
        error_message;
    } else {
        error_message.textContent = "";
        bill_Ammount_value = parseInt(bill_Ammount_value);
        percentage_Tip_value = parseInt(percentage_Tip_value);
        let Tip = (percentage_Tip_value / 100) * bill_Ammount_value;
        let Final_ammount = bill_Ammount_value + Tip;
        tip_Ammount.value = Tip;
        totalAmount.value = Final_ammount;

    }
}