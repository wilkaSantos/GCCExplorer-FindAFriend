import { Carousel } from "./carousel.js";
import { carouselMobile } from "./carouselM.js";


const buttonMobileMenu = document.querySelector('.bt-menuMobile');
const buttonMobileMenuClose = document.querySelector('.bt-closeMobile');
const backButton = document.querySelector('.backButton');
const nextButton = document.querySelector('.nextButton');
const test = document.querySelector('.mobile-carousel-wrapped-card');

const carousel = Carousel();
const cm = carouselMobile();


buttonMobileMenu.addEventListener('click', ()=>{
  menuMobile.open();
});

buttonMobileMenuClose.addEventListener('click', ()=> {
  menuMobile.close();
});


const menuMobile = {
  box: document.querySelector('.container-listMenu'),
  open(){
    this.box.classList.toggle('disabled');
    buttonMobileMenu.classList.add('disabled');
    buttonMobileMenuClose.classList.remove('disabled');
  },
  close(){
    this.box.classList.toggle('disabled');
    buttonMobileMenuClose.classList.add('disabled');
    buttonMobileMenu.classList.remove('disabled');
  }
}

backButton.addEventListener('click', ()=>{
  carousel.backPreviousImage();
});

nextButton.addEventListener('click', ()=>{
  carousel.goNextImage();
});
