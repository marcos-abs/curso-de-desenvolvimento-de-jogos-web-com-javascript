/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/pong-game
 * File Created: Sunday, 27 March 2022 09:51:13
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Sunday, 27 March 2022 09:51:15
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 59. Eventos
 * *****
 */
let canvas = document.getElementById('canvas'); // integração com o HTML5
let container = canvas.getContext('2d');
container.fillStyle = '#8b8b8b';

// let jogador1 = container.fillRect(20, 90, 15, 100); // <canvas id="canvas" width="430" height="280"></canvas>
let jogador1 = {
    px: 10,
    py: 90,
    tx: 15,
    ty: 100,
};

// let jogador2 = container.fillRect(400, 90, 15, 100); // <canvas id="canvas" width="430" height="280"></canvas>
let jogador2 = {
    px: 405,
    py: 90,
    tx: 15,
    ty: 100,
};

let area_tela = {
    ix: 0,
    iy: 0,
    tx: 430,
    ty: 280,
};

// let bolinha = container.fillRect(430 / 2 - 7.5, 280 / 2 - 7.5, 15, 15);
let bolinha = {
    px: area_tela.tx / 2 - 7.5,
    py: area_tela.ty / 2 - 7.5,
    tx: 15,
    ty: 15,
    dir: 8,
};

container.font = '20px Arial';
let pts1 = 0;
let pts2 = 0;

document.addEventListener('keydown', function () {
    jogador1.py += 8;
});

function Move_Ball() {
    bolinha.px += bolinha.dir;
    if (
        bolinha.px > area_tela.tx - (jogador1.tx + jogador1.px) ||
        bolinha.px < area_tela.ix + (jogador1.tx + jogador1.px)
    ) {
        bolinha.dir *= -1;
    }
}

function Draw() {
    container.fillRect(jogador1.px, jogador1.py, jogador1.tx, jogador1.ty);
    container.fillRect(jogador2.px, jogador2.py, jogador2.tx, jogador2.ty);
    container.fillRect(bolinha.px, bolinha.py, bolinha.tx, bolinha.ty);
    container.fillText('Score 1: ' + pts1, 45, 50);
    container.fillText('Score 2: ' + pts2, 290, 50);
}

function Main() {
    container.clearRect(0, 0, 430, 280);
    Draw();
    Move_Ball();
}

setInterval(Main, 20);
