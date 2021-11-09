const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');


// const navSlide = () => {
//     burger.addEventListener('click', () => {
//         // console.log('burger burger!');
//         navbar.classList.toggle('navbar__active');
//     })

//     burger.addEventListener('keypress', (event) => {
//         if( event.key == 'Enter' || event.key == ' ') {
//             navbar.classList.toggle('navbar__active');
//         }
//     })

//     console.log(event.key);
// }

// navSlide();

const navSlider = () => {
    
    burger.addEventListener( 'click' , () => {
        const slideVisible = navbar.getAttribute('nav-slide-visible');
        

        if(slideVisible === 'false'){
            navbar.setAttribute('nav-slide-visible', true);
            burger.setAttribute('aria-expanded', true);
        }

        else{
            navbar.setAttribute('nav-slide-visible', false);
            burger.setAttribute('aria-expanded', false);
        }

        // console.log(slideVisible);
        // console.log(burger.getAttribute('aria-expanded'));
    });

};

navSlider();