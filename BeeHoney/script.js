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
 * ············ Aula 95. Adicionando características as colisões
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
let jogando = true;
let exitGame = false;

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
let textResult = new Text();

document.addEventListener('keydown', function myListener(event) {
    if (event.key === 'a' || event.key === 'A') {
        bee.dir -= 3;
    }
    if (event.key === 'd' || event.key === 'D') {
        bee.dir += 3;
    }
    if (event.key === 'x' || event.key === 'X') {
        jogando = false;
    }
    if (exitGame) {
        document.removeEventListener('keydown', myListener);
    }
});

document.addEventListener('keyup', function myListener(event) {
    if (event.key === 'a' || event.key === 'A') {
        bee.dir = 0;
    }
    if (event.key === 'd' || event.key === 'D') {
        bee.dir = 0;
    }
    if (event.key === 'x' || event.key === 'X') {
        exitGame = true;
    }
    if (exitGame) {
        document.removeEventListener('keyup', myListener);
    }
});

function collides() {
    if (bee.collide(spider)) {
        spider.respaw();
        lives -= 1;
    }
    if (bee.collide(flower)) {
        flower.respaw();
        pts += 1;
    }
}

function gameOver() {
    if (lives < 1) {
        lives = 0;
        draw();
        jogando = false;
    }
}

function draw() {
    bg.draw();
    bg2.draw();
    if (jogando) {
        bee.draw();
        spider.draw();
        flower.draw();
        textPoints.draw('pontos: ' + pts, 15, 30, 'gray');
        textLives.draw('vidas: ' + lives, 315, 30, 'orange');
    } else {
        textResult.draw('Game Over', 95, 140, 'orange', '50px Arial');
        textResult.draw('Pontos: ' + pts, 150, 190, 'gray', '30px Arial');
        textResult.draw(
            'Press <X> para finish the game.',
            80,
            230,
            'green',
            '20px Arial',
        );
    }
}

function update() {
    bg.move(speed, areaTela.ty, areaTela.iy);
    bg2.move(speed, areaTela.iy, areaTela.ty * -1);
    if (jogando) {
        bee.move();
        bee.animation('bee', 4);
        spider.move();
        spider.animation('spider', 4);
        flower.move();
        flower.animation('flower', 2);
    }
}

function main() {
    canvas.clearRect(areaTela.ix, areaTela.iy, areaTela.tx, areaTela.ty);
    if (!exitGame) {
        update();
        draw();
        collides();
        gameOver();
    } else {
        clearInterval(refreshIntervalId);
    }
}

let refreshIntervalId = setInterval(main, 10);
