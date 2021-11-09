const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');


const navSlide = () => {
    burger.addEventListener('click', () => {
        // console.log('burger burger!');
        navbar.classList.toggle('navbar__active');
    })
}

navSlide();