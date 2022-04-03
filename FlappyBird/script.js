/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/FlappyBird
 * File Created: Saturday, 02 April 2022 00:03:11
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Saturday, 02 April 2022 00:03:13
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 104. Animações
 * *****
 */

let canvas = document.getElementById('canvas').getContext('2d');
const areaTela = {
    ix: 0,
    iy: 0,
    tx: 430,
    ty: 560,
};
const areaTerra = {
    ix: 0,
    iy: 396,
    tx: 430,
    ty: 164,
};
const areaBird = {
    ix: 0,
    iy: 250,
    tx: 63,
    ty: 51,
};
let bg = new Bg(
    areaTela.ix,
    areaTela.iy,
    areaTela.tx,
    areaTela.ty,
    'assets/images/sky.png',
);

let bg2 = new Bg(
    areaTela.tx,
    areaTela.iy,
    areaTela.tx,
    areaTela.ty,
    'assets/images/sky.png',
);

let ground = new Ground(
    areaTerra.ix,
    areaTerra.iy,
    areaTerra.tx,
    areaTerra.ty,
    'assets/images/ground.png',
);

let ground2 = new Ground(
    areaTerra.tx,
    areaTerra.iy,
    areaTerra.tx,
    areaTerra.ty,
    'assets/images/ground.png',
);

let bird = new Bird(
    areaBird.ix,
    areaBird.iy,
    areaBird.tx,
    areaBird.ty,
    'assets/images/bird0.png',
);

document.addEventListener('click', function (e) {
    bird.y -= 5;
});

function draw() {
    bg.draw();
    bg2.draw();
    ground.draw();
    ground2.draw();
    bird.draw();
}

function update() {
    bg.move(1, -areaTela.tx, areaTela.ix);
    bg2.move(1, areaTela.ix, areaTela.tx);
    ground.move(3, -areaTerra.tx, areaTerra.ix);
    ground2.move(3, areaTerra.ix, areaTerra.tx);
    bird.animation(10, 4, 'bird');
}

function clearScreen() {
    canvas.clearRect(areaTela.ix, areaTela.iy, areaTela.tx, areaTela.ty);
}

function main() {
    clearScreen();
    draw();
    update();
    requestAnimationFrame(main);
}

main();
