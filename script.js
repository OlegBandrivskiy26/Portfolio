let typed = new Typed('.label', {
    strings: [", Web Developer."],
    typeSpeed: 70,
    backSpeed: 0,
});
AOS.init();
const cards = document.querySelectorAll('.card');

for(let i=0; i<cards.length; i++){
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
}
function stopRotate(event){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}
function startRotate(event){
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight/2;
    const halfWidth = cardItem.offsetWidth/2;
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5+'deg) rotateY('+(event.offsetX - halfWidth)/5+'deg)';
}
let photo1 = document.getElementById('ph1');
ph1.onclick = function (){
    $('#ph1').slideToggle(1000);
}
ph2.onclick = function (){
    $('#ph2').slideToggle(1000);
}
ph3.onclick = function (){
    $('#ph3').slideToggle(1000);
}
ph4.onclick = function (){
    $('#ph4').slideToggle(1000);
}


