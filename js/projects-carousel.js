const itemsCarousel = document.querySelectorAll('.carousel-item');
const containerCarousel = document.querySelector('#div-carousel-container');
const sectionProjects = document.querySelector('#projects');

// Ative quando a página estiver no topo 
function carouselAnimation() {
    function animationDiv() {
        itemsCarousel.forEach((div, index) => {
            const divTop = div.getBoundingClientRect().top;
    
            const mainDiv = div.nextElementSibling;
        
            setTimeout(() => {
                
                if(divTop <= 0) {
                    itemsCarousel.forEach((div) => {
                        div.classList.remove('active');
                    });

                    
                    div.classList.add('active');
                    div.nextElementSibling.nextElementSibling.classList.add('active');
    
                    
                    // Resolver o 100, pois dependendo da tela esse valor mudar
        
                } else if(divTop <= 100) {
                    div.nextElementSibling.classList.add('active');
                    itemsCarousel[0].classList.remove('active');
                    
                }
            }, 800);
            
    
        });
    }
    containerCarousel.addEventListener('scroll', animationDiv);
    
}

if(sectionProjects.getBoundingClientRect().top >= 0) {
    carouselAnimation();
}