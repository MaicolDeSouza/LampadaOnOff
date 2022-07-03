const btnOn = document.querySelector('.btnOn');
const btnOff = document.querySelector('.btnOff');
const lamp = document.querySelector('.lamp');

let lampBrokenFlag = 0;

function lampOn() {
    if(!lampBrokenFlag) lamp.src = './images/ligada.jpg';
}

function lampOff() {
    if(!lampBrokenFlag) lamp.src = './images/desligada.jpg';
}

function lampBroken() {
    lamp.src = './images/quebrada.jpg';
    lampBrokenFlag = true;
}

btnOn.onmousedown = ()=> lampOn();
btnOff.onmousedown = ()=> lampOff();
lamp.onmouseover = ()=> lampOn();
lamp.onmouseleave = ()=> lampOff();
lamp.ondblclick = ()=> lampBroken();

