const itemsCarousel = document.querySelectorAll('.carousel-item');
const containerCarousel = document.querySelector('#div-carousel-container');
const sectionProjects = document.querySelector('#projects');

// Ative quando a página estiver no topo 
function carouselAnimation() {
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
carouselAnimation();

// Animation Title
function initTitleAnimation() {

    const divTitle = document.querySelector('#projects > #div-container > #div-title');

    window.addEventListener('scroll', () => {
        if(sectionProjects.getBoundingClientRect().top <= 0) {
            divTitle.style.display = 'flex';
            divTitle.style.transform = 'translate3d(0, 150px, 0)';
        } else {
            divTitle.style.transform = 'translate3d(0, 0, 0)';
            divTitle.style.display = 'none';
        }
        
    });

}

initTitleAnimation();