let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");


function changeTheme (event) {
    let userValue = themeUserInput.value;
   
    if (event.key === 'Enter') {
        if (userValue === "Dark") {
        bgContainer.style.backgroundImage = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";
        heading.style.color = "white";
    } else if (userValue === "Light" ) {
        bgContainer.style.backgroundImage = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
        heading.style.color = "#014d40";
    } else {
        alert("Enter A VAlid Input.")
    }
    }
}


themeUserInput.addEventListener('keydown',changeTheme)