
const buttonMobileMenu = document.querySelector('.bt-menuMobile');
const buttonMobileMenuClose = document.querySelector('.bt-closeMobile');


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
