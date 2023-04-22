import { Carousel } from "./carousel.js";
import { carouselMobile } from "./carouselM.js";
import { CarouselPerson } from "./carouselPerson.js";

const buttonMobileMenu = document.querySelector('.bt-menuMobile');
const buttonMobileMenuClose = document.querySelector('.bt-closeMobile');
const backButton = document.querySelector('.backButton');
const nextButton = document.querySelector('.nextButton');

const carousel = Carousel();
const mobileCarousel = carouselMobile();
const personCarousel = CarouselPerson();


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