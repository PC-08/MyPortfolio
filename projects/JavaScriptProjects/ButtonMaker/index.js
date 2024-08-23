let userbgColor = document.getElementById("bgColorInput");
let userColor = document.getElementById("fontColorInput");
let userfontSize = document.getElementById("fontSizeInput");
let userfontWeight = document.getElementById("fontWeightInput");
let userpadding = document.getElementById("paddingInput");
let userborderRadius = document.getElementById("borderRadiusInput");
let customBtn = document.getElementById("customButton");



function apply() {

    let bgColorValue = userbgColor.value;
    let fontColorValue = userColor.value;
    let fontSizeValue = userfontSize.value;
    let fontWeightValue = userfontWeight.value;
    let paddingValue = userpadding.value;
    let borderRadiusValue = userborderRadius.value;

    customBtn.style.backgroundColor = bgColorValue;
    customBtn.style.color = fontColorValue;
    customBtn.style.fontSize = fontSizeValue;
    customBtn.style.fontWeight = fontWeightValue;
    customBtn.style.padding = paddingValue;
    customBtn.style.borderRadius = borderRadiusValue;
}