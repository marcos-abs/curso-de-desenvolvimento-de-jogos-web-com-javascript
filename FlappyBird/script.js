/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/FlappyBird
 * File Created: Saturday, 02 April 2022 00:03:11
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Monday, 04 April 2022 10:04:43
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 110. Canos aleatórios
 * *****
 */

let canvas = document.getElementById('canvas').getContext('2d');
const aTela = new Area(0, 0, 430, 560);
const aTerra = new Area(0, 400, 430, 160);
const aBird = new Area(0, 250, 63, 51);
const aPipeUp = new Area(300, -200, 96, 358);
const aPipeDown = new Area(300, 300, 96, 358);
const pipeDiff = aPipeUp.py + aPipeUp.height - aPipeDown.py;
const aCoin = new Area(50, 50, 45, 45);

let bg = new Bg(
    aTela.px,
    aTela.py,
    aTela.width,
    aTela.height,
    'assets/images/sky.png',
);
let bg2 = new Bg(
    aTela.px,
    aTela.py,
    aTela.width,
    aTela.height,
    'assets/images/sky.png',
);
let ground = new Ground(
    aTerra.px,
    aTerra.py,
    aTerra.width,
    aTerra.height,
    'assets/images/ground.png',
);
let ground2 = new Ground(
    aTerra.width,
    aTerra.py,
    aTerra.width,
    aTerra.height,
    'assets/images/ground.png',
);
let pipeDown = new Pipe(
    aPipeDown.px,
    aPipeDown.py,
    aPipeDown.width,
    aPipeDown.height,
    'assets/images/pipe1.png',
);
let pipeUp = new Pipe(
    aPipeUp.px,
    aPipeUp.py,
    aPipeUp.width,
    aPipeUp.height,
    'assets/images/pipe2.png',
);

let bird = new Bird(
    aBird.px,
    aBird.py,
    aBird.width,
    aBird.height,
    'assets/images/bird0.png',
);

let coin = new Coin(
    aCoin.px,
    aCoin.py,
    aCoin.width,
    aCoin.height,
    'assets/images/3.png',
);

// document.addEventListener('click', function (e) {
// bird.vel -= 12;
document.addEventListener('keydown', function (e) {
    if (event.key === 'x' || event.key === 'X') {
        bird.vel -= 15;
    }
});

function draw() {
    bg.draw();
    bg2.draw();
    pipeDown.draw();
    pipeUp.draw();
    ground.draw();
    ground2.draw();
    bird.draw();
    // coin.draw();
}

function pipeRand() {
    let sw = Math.random() * 2 + 1;
    // console.log('sw: ', Math.trunc(sw));
    switch (Math.trunc(sw)) {
        case 1:
            pipeUp.move(1, -100, 300, pipeDown, bird);
            break;
        case 2:
            pipeDown.move(1, -100, 300, pipeUp, bird);
            break;
    }
}

function update() {
    bg.move(1, -aTela.width, aTela.px);
    bg2.move(1, aTela.px, aTela.width);
    ground.move(3, -aTerra.width, aTerra.px);
    ground2.move(3, aTerra.px, aTerra.width);
    bird.move();
    bird.animation(10, 4, 'bird');
    bird.limits();
    pipeRand();
    // coin.move(pipeDown);
}

function clearScreen() {
    canvas.clearRect(aTela.ix, aTela.iy, aTela.tx, aTela.ty);
}

function main() {
    clearScreen();
    draw();
    update();
    requestAnimationFrame(main);
}

main();
