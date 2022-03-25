'use strict';

const picters = document.querySelectorAll('.lambo'),
      arrowLeft = document.querySelector('.left'),
      arrowRight = document.querySelector('.right');
let slideIndex = 1; //индекс который определет текущее положение в слайдере



//в параметр n будет приходить на slider index с текущим положение дел
function showSlide(n){
    // создаем условие когда мы из последнего слайда будем переходить в первый 

    // если n(это текущий индекс слайда) больше чем длинна всех индексов в массиве (picters) то slideIndex возвращаем в 1 индекс 
    if(n > picters.length){
        slideIndex = 1;
    }
    // если n(это текущий индекс слайда ) меньше чем 1, то возвращаемся в конец  
    if (n < 1){
        slideIndex = picters.length;
    }

    // мы скрываем все элменты в массиве. для этого мы перебираем массив и через style меняем display
    picters.forEach(item =>{
        item.style.display = 'none';
    });

    // мы берем нужную картинку и показываем ее
    picters[slideIndex - 1].style.display = 'block';
}

showSlide(slideIndex);// вызываем функцию и помещаем изначальный индекс

// делаем функцию которая будем изменять наш индекс, которая принимает аругент n(текущиий индекс слайда)
function plusSlide (n){
    //вызываем функцию/ В нем мы будем увеличивать индекс слайда +1 
    showSlide(slideIndex += n);
}

arrowLeft.addEventListener('click', ()=>{
    plusSlide(-1); // при клике мы отнимаем индекс на 1
});
arrowRight.addEventListener('click', ()=>{
    plusSlide(+1); // при клике мы прибавляем индекс на 1
});



