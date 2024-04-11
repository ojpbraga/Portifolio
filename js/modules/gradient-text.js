export function initTextPresentation() {
    const presentationDivContainer = document.querySelector("#div-container");
    const nameTitle = document.querySelector("#h1-name");

    // Refazer essa parte
    presentationDivContainer.addEventListener("mousemove", (event) => {
        if(event.offsetX >= 0 && event.offsetY >= 0) {
            nameTitle.style.background = `linear-gradient(${event.offsetX}deg, rgba(0, 198, 198, 0.75) 40.02%, rgba(165, 68, 225, 0.912) 80.7%)`;
            nameTitle.style.webkitBackgroundClip = "text";
            nameTitle.style.webkitTextFillColor = "transparent";
        }
    });
}

export function initTextAboutMe() {
    // Title
    const aboutMeDivContainer = document.querySelector('#about-me > #div-container');
    const titleAboutMe = document.querySelector('#about-me-title');

    aboutMeDivContainer.addEventListener("mousemove", (event) => {
        if(event.offsetX >= 0 && event.offsetY >= 0) {
            // DESCOMENTA E RESOLVE
            titleAboutMe.style.background = `linear-gradient(${event.offsetX}deg, rgba(0, 198, 198, 0.75) 40.02%, rgba(165, 68, 225, 0.912) 80.7%)`;
            titleAboutMe.style.webkitBackgroundClip = "text";
            titleAboutMe.style.webkitTextFillColor = "transparent";
        }
    });


    // Nickname
    const nicknameDivContainer = document.querySelector('#div-nickname');
    const nicknameAboutMe = document.querySelector('#about-me > #div-nickname > h1');

    nicknameDivContainer.addEventListener("mousemove", (event) => {
        if(event.offsetX >= 0 && event.offsetY >= 0) {
            nicknameAboutMe.style.background = `linear-gradient(${event.offsetX}deg, rgba(0, 198, 198, 0.75) 40.02%, rgba(165, 68, 225, 0.912) 80.7%)`;
            nicknameAboutMe.style.webkitBackgroundClip = "text";
            nicknameAboutMe.style.webkitTextFillColor = "transparent";
        }
    });

    // Essas duas funções podem ser refatoradas em apenas uma.
}