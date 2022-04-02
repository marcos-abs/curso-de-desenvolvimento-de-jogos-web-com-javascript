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
 * ············ Aula 100. Background infinito
 * *****
 */

let canvas = document.getElementById('canvas').getContext('2d');
const areaTela = {
    ix: 0,
    iy: 0,
    tx: 430,
    ty: 560,
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

function draw() {
    bg.draw();
    bg2.draw();
}

function update() {
    bg.move(5, -areaTela.tx, areaTela.ix);
    bg2.move(5, areaTela.ix, areaTela.tx);
}

function clearScreen() {
    canvas.clearRect(areaTela.ix, areaTela.iy, areaTela.tx, areaTela.ty);
}

function main() {
    clearScreen();
    draw();
    update();
}

let refreshCanvas = setInterval(main, 100);
