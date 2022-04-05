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
const aPipeDown = new Area(300, 300, 96, 358);
const aPipeUp = new Area(300, -200, 96, 358);
const aCoin = new Area(50, 50, 45, 45);

let bg = new Bg(
    aTela.x,
    aTela.y,
    aTela.width,
    aTela.height,
    'assets/images/sky.png',
);
let bg2 = new Bg(
    aTela.width,
    aTela.y,
    aTela.width,
    aTela.height,
    'assets/images/sky.png',
);
let ground = new Ground(
    aTerra.x,
    aTerra.y,
    aTerra.width,
    aTerra.height,
    'assets/images/ground.png',
);
let ground2 = new Ground(
    aTerra.width,
    aTerra.y,
    aTerra.width,
    aTerra.height,
    'assets/images/ground.png',
);
let pipeDown = new Pipe(
    aPipeDown.x,
    aPipeDown.y,
    aPipeDown.width,
    aPipeDown.height,
    'assets/images/pipe1.png',
);
let pipeUp = new Pipe(
    aPipeUp.x,
    aPipeUp.y,
    aPipeUp.width,
    aPipeUp.height,
    'assets/images/pipe2.png',
);

let bird = new Bird(
    aBird.x,
    aBird.y,
    aBird.width,
    aBird.height,
    'assets/images/bird0.png',
);

let coin = new Coin(
    aCoin.x,
    aCoin.y,
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
    coin.draw();
}

function update() {
    bg.move(1, -aTela.width, aTela.x);
    bg2.move(1, aTela.x, aTela.width);
    ground.move(3, -aTerra.width, aTerra.x);
    ground2.move(3, aTerra.x, aTerra.width);
    bird.move();
    bird.animation(10, 4, 'bird');
    bird.limits();
    pipeDown.move(1, -100, aPipeDown.x, pipeUp);
    coin.move(pipeDown);
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
