const presentationDivContainer = document.querySelector("#div-container");

const nameTitle = document.querySelector("#h1-name");

const mouseBackground = document.createElement("div");
const backgroundColors = document.querySelector("#bg");
const mouseCircle = document.createElement("div");
const main = document.querySelector("main");

const header = document.querySelector('header');

// Troca de cor gradiente
// Refazer essa parte
presentationDivContainer.addEventListener("mousemove", (event) => {
    if(event.offsetX >= 0 && event.offsetY >= 0) {
        nameTitle.style.background = `linear-gradient(${event.offsetX}deg, rgba(0, 198, 198, 0.75) 40.02%, rgba(165, 68, 225, 0.912) 80.7%)`;
        nameTitle.style.webkitBackgroundClip = "text";
        nameTitle.style.webkitTextFillColor = "transparent";
    }
});

// Trocar de cor gradiente - About Me
const aboutMeDivContainer = document.querySelector('#about-me > #div-container');
const titleAboutMe = document.querySelector('#about-me > #div-container > #div-text > h1');

const nicknameDivContainer = document.querySelector('#div-nickname');
const nicknameAboutMe = document.querySelector('#about-me > #div-nickname > h1');

aboutMeDivContainer.addEventListener("mousemove", (event) => {
    if(event.offsetX >= 0 && event.offsetY >= 0) {
        titleAboutMe.style.background = `linear-gradient(${event.offsetX}deg, rgba(0, 198, 198, 0.75) 40.02%, rgba(165, 68, 225, 0.912) 80.7%)`;
        titleAboutMe.style.webkitBackgroundClip = "text";
        titleAboutMe.style.webkitTextFillColor = "transparent";
    }
});

nicknameDivContainer.addEventListener("mousemove", (event) => {
    if(event.offsetX >= 0 && event.offsetY >= 0) {
        nicknameAboutMe.style.background = `linear-gradient(${event.offsetX}deg, rgba(0, 198, 198, 0.75) 40.02%, rgba(165, 68, 225, 0.912) 80.7%)`;
        nicknameAboutMe.style.webkitBackgroundClip = "text";
        nicknameAboutMe.style.webkitTextFillColor = "transparent";
    }
});


// Background mouse
backgroundColors.appendChild(mouseBackground);
mouseBackground.style.position = "fixed";
mouseBackground.style.width = "120px";
mouseBackground.style.height = "120px";
mouseBackground.style.borderRadius = "100%";
mouseBackground.style.background = "rgba(0, 198, 198, 0.75)";

// Circle Mouse
// main.appendChild(mouseCircle);
// mouseCircle.style.position = "fixed";
// mouseCircle.style.width = "70px";
// mouseCircle.style.height = "70px";
// mouseCircle.style.border = "solid white 3px";
// mouseCircle.style.borderRadius = "100%";
// mouseCircle.style.zIndex = "99";


window.addEventListener("mousemove", (event) => {
    mouseBackground.style.top = event.y-50 + "px";
    mouseBackground.style.left = event.x-50 + "px";

    // mouseCircle.style.top = event.y-30 + "px";
    // mouseCircle.style.left = event.x-30 + "px";
});


// Troca de cor header
window.addEventListener('scroll', () => {
    if(scrollY > 400) {
        header.style.background = "linear-gradient(90deg, #405CD9 0%, rgba(167, 85, 218, 0.8) 33.44%, rgba(228, 50, 91, 0.8) 64.17%, rgba(242, 205, 110, 0.8) 88.65%)";
        header.style.backdropFilter = "blur(5px)";
        header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        
    } else if(scrollY < 400) {
        header.style.background = "rgba(17, 95, 151, 0.3)";
    }
});