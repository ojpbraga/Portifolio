function changeHeader(gradient) {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {

        if(scrollY > 400) {
            header.style.background = gradient;
            header.style.backdropFilter = "blur(5px)";
            header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            
        } else if(scrollY < 400) {
            header.style.background = "rgba(17, 95, 151, 0.3)";
        }
        
    })
}

// Troca de cor header
export function initHeader() {
    // Header iniciando no modo dark
    changeHeader("linear-gradient(90deg, rgba(64, 92, 217, 0.70) 0%, rgba(167, 85, 218, 0.32) 33.44%, rgba(228, 50, 91, 0.49) 64.17%, rgba(242, 205, 110, 0.49) 88.65%)");

}

// Dark Mode
export function initHeaderDark() {
    const html = document.querySelector("html");
    const buttonTheme = document.querySelector("#button-switch-theme");
    // html.classList.add('dark-mode'); // Mantendo como defoult
    
    buttonTheme.addEventListener('click', () => {
        // Troca das cores
        html.classList.toggle('dark-mode');
    
        if(html.classList.contains("dark-mode")) {
            // Verificando qual tema está para troca de cor do header
            changeHeader("linear-gradient(90deg, rgba(64, 92, 217, 0.70) 0%, rgba(167, 85, 218, 0.32) 33.44%, rgba(228, 50, 91, 0.49) 64.17%, rgba(242, 205, 110, 0.49) 88.65%)");
    
            // Troca de icon button
            buttonTheme.setAttribute('src', './assets/img/sun-solid_light.svg');
    
        } else {
            // Verificando qual tema está para troca de cor do header
            changeHeader("linear-gradient(90deg, #405CD9 0%, rgba(167, 85, 218, 0.8) 33.44%, rgba(228, 50, 91, 0.8) 64.17%, rgba(242, 205, 110, 0.8) 88.65%)");
        
            // Troca de icon button
            buttonTheme.setAttribute('src', './assets/img/moon.svg');
    
        }
    })
}
