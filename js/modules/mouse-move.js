export function initMouseMove() {
    const mouseBackground = document.createElement("div");
    const backgroundColors = document.querySelector("#bg");

    backgroundColors.appendChild(mouseBackground);
    mouseBackground.style.position = "fixed";
    mouseBackground.style.width = "120px";
    mouseBackground.style.height = "120px";
    mouseBackground.style.borderRadius = "100%";
    mouseBackground.style.background = "rgba(0, 198, 198, 0.75)";

    window.addEventListener("mousemove", (event) => {
        mouseBackground.style.top = event.y-50 + "px";
        mouseBackground.style.left = event.x-50 + "px";
    
        // mouseCircle.style.top = event.y-30 + "px";
        // mouseCircle.style.left = event.x-30 + "px";
    });
}



// Circle Mouse
// const mouseCircle = document.createElement("div");
// const main = document.querySelector("main");

// main.appendChild(mouseCircle);
// mouseCircle.style.position = "fixed";
// mouseCircle.style.width = "70px";
// mouseCircle.style.height = "70px";
// mouseCircle.style.border = "solid white 3px";
// mouseCircle.style.borderRadius = "100%";
// mouseCircle.style.zIndex = "99";