export function initCarouselAnimation() {
    const itemsCarousel = document.querySelectorAll('.carousel-item');
    const containerCarousel = document.querySelector('#div-carousel-container');
    
    // Ative quando a página estiver no topo 
    function animationDiv(position, positionLenght) {
        itemsCarousel.forEach((div, index) => {

            const divTop = div.getBoundingClientRect()[position];
            const mainDiv = div.nextElementSibling;
        
            setTimeout(() => {
                if(divTop <= 0) {
                    itemsCarousel.forEach((div) => {
                        div.classList.remove('active');
                    });
                    mainDiv.classList.add('active');
                    // Resolver o 10, pois dependendo da tela esse valor mudar
        
                } else if(divTop <= positionLenght) {
                    itemsCarousel[0].classList.add('active');
                    itemsCarousel[0].nextElementSibling.classList.remove('active');
                }
            }, 800);
        });
    }
    containerCarousel.addEventListener('scroll', () => {
        if(window.innerWidth <= 430) {
            animationDiv("x", 10);
        } else {
            animationDiv("y", 100);
        }
    });
}


// Animation Title
export function initTitleAnimation() {

    const sectionProjects = document.querySelector('#projects');
    const divTitle = document.querySelector('#projects > #div-container > #div-title');
    const small = window.matchMedia('(max-width: 430px)');

    window.addEventListener('scroll', () => {
        if(sectionProjects.getBoundingClientRect().top <= 0) {

            // Observação: na refatoração, criar uma class no Css que fará o elemente ter as novas propriedades. Modificar as propriedades por JS não é eficiente.
            if(small.matches) {
                divTitle.style.transform = 'translate3d(0, 9.5vh, 0)';
            } else {
                divTitle.style.transform = 'translate3d(0, 13.5vh, 0)';
            }

        } else {
            divTitle.style.transform = 'translate3d(0, 0, 0)';
        }
        
    });

}