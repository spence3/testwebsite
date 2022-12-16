var homeButton = document.getElementById("clickHome");
var datesButton = document.getElementById("clickDates");
var connectButton = document.getElementById("clickConnect");
var darkModeButton = document.getElementById("darkButton");
var visitFormButton = document.getElementById("clickForm");



homeButton.addEventListener("click", showHome);
datesButton.addEventListener("click", showDates);
connectButton.addEventListener("click", showConnect);
darkModeButton.addEventListener("click", showDarkMode);
visitFormButton.addEventListener("click", showVisitForm)

function showHome(){
    var homePage = document.getElementById("home");
    var datesPage = document.getElementById("dates");
    var connectPage = document.getElementById("connect");
    var visitPage = document.getElementById("visit");
    
    homePage.style.display = "block";
    datesPage.style.display = "none";
    connectPage.style.display = "none"
    visitPage.style.display = "none";
}


function showDates(){
    var homePage = document.getElementById("home");
    var datesPage = document.getElementById("dates");
    var connectPage = document.getElementById("connect");
    var visitPage = document.getElementById("visit");
    
    datesPage.style.display = "block"

    homePage.style.display = "none";
    connectPage.style.display = "none";
    visitPage.style.display = "none";
}

function showConnect(){
    var homePage = document.getElementById("home");
    var datesPage = document.getElementById("dates");
    var connectPage = document.getElementById("connect");
    var visitPage = document.getElementById("visit");

    connectPage.style.display = "block";

    homePage.style.display = "none";
    datesPage.style.display = "none";
    visitPage.style.display = "none";

}


function showVisitForm(){
    var homePage = document.getElementById("home");
    var datesPage = document.getElementById("dates");
    var connectPage = document.getElementById("connect");
    var visitPage = document.getElementById("visit");

    visitPage.style.display = "block";


    homePage.style.display = "none";
    datesPage.style.display = "none";
    connectPage.style.display = "none";
}

function showDarkMode(){
    var head = document.getElementById("head");
    var newCss = document.createElement("link");
    var dark = document.getElementById("dark")
    newCss.rel = "stylesheet";
    newCss.href = "darkmode.css";
    newCss.id = "dark"
    var test = document.getElementsByTagName("link")
    if (head.childElementCount == 5){
        head.appendChild(newCss);
        darkModeButton.innerHTML = "Light Mode";
    }
    else{
        dark.remove()
        darkModeButton.innerHTML = "Dark Mode"
    }
}


var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".flex-nav");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
