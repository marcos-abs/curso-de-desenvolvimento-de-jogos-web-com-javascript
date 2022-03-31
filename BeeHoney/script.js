/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/BeeHoney
 * File Created: Monday, 28 March 2022 14:50:19
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Monday, 28 March 2022 15:27:08
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 86. Movendo o BG
 * *****
 */

const areaTela = {
    ix: 0,
    iy: 0,
    tx: 430,
    ty: 280,
};

const speed = 3;

let canvas = document.getElementById('canvas').getContext('2d');

let bg = new Bg(
    areaTela.ix,
    areaTela.iy,
    areaTela.tx,
    areaTela.ty,
    'assets/bg.png',
);
let bg2 = new Bg(
    areaTela.ix,
    areaTela.ty * -1,
    areaTela.tx,
    areaTela.ty,
    'assets/bg.png',
);
let bee = new Bee(150, 150, 50, 50, 'assets/bee1.png');
let spider = new Spider(50, 50, 50, 50, 'assets/spider1.png');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        bee.dir -= 1;
    }
    if (event.key === 'd') {
        bee.dir += 1;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'a') {
        bee.dir = 0;
    }
    if (event.key === 'd') {
        bee.dir = 0;
    }
});

function draw() {
    bg.draw();
    bg2.draw();
    bee.draw();
    spider.draw();
}

function update() {
    bg.move(speed, areaTela.ty, areaTela.iy);
    bg2.move(speed, areaTela.iy, areaTela.ty * -1);
    bee.move();
    bee.animation();
    spider.move();
}

function main() {
    canvas.clearRect(areaTela.ix, areaTela.iy, areaTela.tx, areaTela.ty);
    update();
    draw();
}

setInterval(main, 10);
