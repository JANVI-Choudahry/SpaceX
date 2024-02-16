console.log("hellooooooooooooooooooooooooooooooooooooooo");

console.log('helo baby');


const btn = document.getElementById('menu_btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('moblie_menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted  = false;


btn.addEventListener('click', navToggle);
document.addEventListener('scroll',scrollPage);

function navToggle() {
btn.classList.toggle('open');
overlay.classList.toggle('overlay_show');
document.body.classList.toggle('stop_scroll');
menu.classList.toggle('show_menu');
}


function scrollPage(){
    const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted){
    countup();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countup(){
counters.forEach((counter) =>{
counter.innerText = '0';

const updateCounter = () =>{
    const target = +counter.getAttribute('data-target');

  
const c = +counter.innerText;

 const increment = target / 100;

 
if (c < target ){
    counter.innerText = `${Math.ceil(c + increment)}`

    setTimeout(updateCounter, 75);
} else {
    counter.innerText = target;
}
};

updateCounter();
});
}
// countup();

function reset (){
    counters.forEach((counter) => counter.innerHTML =' 0')
}
