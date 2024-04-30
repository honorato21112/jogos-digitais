const mario = document.querySelector('mario');
const pipe = document . querySelector('pipe');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.calassList.remove('jump');
    },500);

}
const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft;
    const  marioPostion = +window.getComputedStyle(mario).bottom.replace('px','');
    
})