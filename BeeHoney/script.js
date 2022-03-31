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
 * ············ Aula 92. Colisões
 * *****
 */

const areaTela = {
    ix: 0,
    iy: 0,
    tx: 430,
    ty: 280,
};

const speed = 3;
let lives = 5;
let pts = 0;

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
let flower = new Flower(30, 30, 30, 30, 'assets/flower1.png');

let textPoints = new Text();
let textLives = new Text();

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
    flower.draw();
    textPoints.draw('pontos: ' + pts, 15, 30, 'gray');
    textLives.draw('vidas: ' + lives, 315, 30, 'orange');
}

function update() {
    bg.move(speed, areaTela.ty, areaTela.iy);
    bg2.move(speed, areaTela.iy, areaTela.ty * -1);
    bee.move();
    bee.animation('bee', 4);
    if (bee.collide(spider)) {
        console.log('Colidiu');
    }
    spider.move();
    spider.animation('spider', 4);
    flower.move();
    flower.animation('flower', 2);
}

function main() {
    canvas.clearRect(areaTela.ix, areaTela.iy, areaTela.tx, areaTela.ty);
    update();
    draw();
}

setInterval(main, 10);
