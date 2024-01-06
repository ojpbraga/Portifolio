const itemsCarousel = document.querySelectorAll('.carousel-item');
const containerCarousel = document.querySelector('#div-carousel-container');
const sectionProjects = document.querySelector('#projects');

// Ative quando a página estiver no topo 
function carouselAnimation() {
    function animationDiv() {
        itemsCarousel.forEach((div, index) => {
            const divTop = div.getBoundingClientRect().top;

            console.log(divTop)
    
            const mainDiv = div.nextElementSibling;
        
            setTimeout(() => {
                
                if(divTop <= 0) {
                    itemsCarousel.forEach((div) => {
                        div.classList.remove('active');
                    });

                    mainDiv.classList.add('active');
    
                    // Resolver o 100, pois dependendo da tela esse valor mudar
        
                } else if(divTop <= 100) {
        
                    itemsCarousel[0].classList.add('active');
                    itemsCarousel[0].nextElementSibling.classList.remove('active');
                    
                }
            }, 900);
            
    
        });
    }
    containerCarousel.addEventListener('scroll', animationDiv);
}

carouselAnimation();

// window.addEventListener('scroll', () => {
//     if(sectionProjects.getBoundingClientRect().top === 0) {
//         carouselAnimation();
//         itemsCarousel[0].classList.remove('active');
//     }
// });