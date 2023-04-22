
export function CarouselPerson(){

    const balls = document.querySelector('.circle');
    const ball = document.querySelectorAll('.circle div');
    const personCarousel = document.querySelectorAll('.cardSlide-mobile');
    const initial = document.getElementById('currentPerson');
    let index = 0;

    for(let i = 0; i < personCarousel.length; i++){
        let div = document.createElement('div');
        div.id = i;
        balls.appendChild(div);
    }

    document.getElementById('0').classList.add('change');

    for(let i = 0; i < ball.length; i++){
        ball[i].addEventListener('click', ()=>{
            index = ball[i].id;
        });

    }

    function slide(){
        if(index >= personCarousel.length){
            index = 0;

        }else if(index < 0){
            index = personCarousel.length - 1;
        }

        document.querySelector('.change').classList.remove('change');
        initial.style.marginLeft = -275 * index+'px';
        document.getElementById(index).classList.add('change');
    }

    slide();

    setInterval(()=>{
        index++;
        slide();

    }, 3000);
    
}