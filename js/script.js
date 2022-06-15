const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const over = document.getElementById('img');
const over2 = document.getElementById('img2');



const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 165 && pipePosition > 0 && marioPosition < 125) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '90px';
        mario.style.marginLeft = '80px';
        
        over.classList.remove('hidden');
        over2.classList.remove('hidden');


        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump);
