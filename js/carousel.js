
export function Carousel(){

    const balls = document.querySelector('.carousel-wrapped-balls');
    const carousel = document.querySelectorAll('.carousel-card');
    const ballPosition = document.querySelectorAll('.carousel-wrapped-balls div');
    const initial = document.getElementById('current');
    
    let currentPosition = 0;
    
    for(let i = 0; i < carousel.length; i++){
        let div = document.createElement('div');
        div.id = i;
        balls.appendChild(div);
    }
    
    document.getElementById('0').classList.add('primary');
    
    for(let i = 0; i < ballPosition.length; i++){
        ballPosition[i].addEventListener('click', ()=>{
            currentPosition = ballPosition[i].id;
        });
    }
    
    function backPreviousImage(){
        currentPosition--;
        slide();
    }
    
    function goNextImage(){
        currentPosition++;
        slide();
    }
    
    function slide(){
        if(currentPosition >= carousel.length){
            currentPosition = 0;
    
        }else if(currentPosition < 0){
            currentPosition =  carousel.length - 1;
        }
    
        document.querySelector('.primary').classList.remove('primary');
        initial.style.marginLeft = -294 * currentPosition+'px';
        document.getElementById(currentPosition).classList.add('primary');
        
    }
    
    slide();
    

    return { backPreviousImage, goNextImage }
}