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

const velocity = 10;
const respawPosition = aPipeDown.x;
let lives = 5;
let pts = 0;
let jogando = true;
let exitGame = false;

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

let textPoints = new Text();
let textLives = new Text();
let textResult = new Text();

document.addEventListener('keydown', function (e) {
    if (event.key === 'x' || event.key === 'X') {
        bird.vel -= 15;
    }
});

function collides() {
    if (bird.collide(pipeDown) || bird.collide(pipeUp)) {
        pipeDown.respaw();
        pipeUp.respaw();
        lives -= 1;
    }
    if (bird.collide(coin)) {
        coin.respaw();
        pts += 1;
    }
}

function draw() {
    if (jogando) {
        bg.draw();
        bg2.draw();
        pipeDown.draw();
        pipeUp.draw();
        ground.draw();
        ground2.draw();
        bird.draw();
        coin.draw();
        textPoints.draw('pontos: ' + pts, 15, 30, 'white');
        textLives.draw('vidas: ' + lives, 315, 30, 'white');
    } else {
        bg.draw();
        bg2.draw();
        textResult.draw('Game Over', 95, 140, 'blue', '50px Arial');
        textResult.draw('Pontos: ' + pts, 150, 190, 'orange', '30px Arial');
        textResult.draw(
            'Pressione <F5> para reiniciar o jogo.',
            70,
            230,
            'green',
            '20px Arial',
        );
    }
}

function update() {
    bg.move(1, -aTela.width, aTela.x);
    bg2.move(1, aTela.x, aTela.width);
    if (jogando) {
        ground.move(3, -aTerra.width, aTerra.x);
        ground2.move(3, aTerra.x, aTerra.width);
        bird.move();
        bird.animation(velocity, 4, 'bird');
        bird.limits();
        pipeDown.move(1, -100, respawPosition, pipeUp);
        coin.move(pipeDown);
        coin.animation(velocity, 6, '');
    }
}

function gameOver() {
    if (lives < 1) {
        lives = 0;
        draw();
        jogando = false;
    }
}

function clearScreen() {
    canvas.clearRect(aTela.ix, aTela.iy, aTela.tx, aTela.ty);
}

function main() {
    clearScreen();
    if (!exitGame) {
        draw();
        update();
        collides();
        gameOver();
    }
    requestAnimationFrame(main);
}

main();
