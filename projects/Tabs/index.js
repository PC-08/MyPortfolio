let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");
let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");



function About() {
    aboutTab.classList.add("d-block");
    timeToVisitTab.classList.remove("d-block");
    attractionsTab.classList.remove("d-block");
    aboutButton.style.backgroundColor = "white";
    timeToVisitButton.style.backgroundColor = "#dae2ec";
    attractionsButton.style.backgroundColor = "#dae2ec";
}

function TimeToVisit() {
    aboutTab.classList.remove("d-block");
    aboutTab.classList.add("d-none");
    attractionsTab.classList.remove("d-block");
    attractionsTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-block");
    aboutButton.style.backgroundColor = "#dae2ec";
    timeToVisitButton.style.backgroundColor = "white";
    attractionsButton.style.backgroundColor = "#dae2ec";

}

function Attraction() {
    attractionsTab.classList.add("d-block");
    aboutTab.classList.remove("d-block");
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-block");
    timeToVisitTab.classList.add("d-none");
    aboutButton.style.backgroundColor = "#dae2ec";
    timeToVisitButton.style.backgroundColor = "#dae2ec";
    attractionsButton.style.backgroundColor = "white";
}