
export function carouselMobile(){
  const balls = document.querySelector('.balls');
  const ball = document.querySelectorAll('.balls div');
  const mobCarousel = document.querySelectorAll('.mobile-carousel-card');
  const initialImage = document.getElementById('currentMobile');
    let position = 0;

    for(let i = 0; i < mobCarousel.length; i++){
      let div = document.createElement('div');
      div.id = i;
      balls.appendChild(div);
  }
  
  document.getElementById('0').classList.add('primary');
  
  for(let i = 0; i < ball.length; i++){
    ball[i].addEventListener('click', ()=>{
      position = ball[i].id;
      });
  }
    
  function slide(){
      if(position >= mobCarousel.length){
        position = 0;
  
      }else if(position < 0){
        position =  mobCarousel.length - 1;
      }
  
      document.querySelector('.primary').classList.remove('primary');
      initialImage.style.marginLeft = -250 * position+'px';
      document.getElementById(position).classList.add('primary');
      
  }
  
  slide();

  setInterval(()=>{

    position++;
    slide();

  }, 4000);

}