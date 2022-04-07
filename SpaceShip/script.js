/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/SpaceShip
 * File Created: Thursday, 07 April 2022 11:25:38
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Thursday, 07 April 2022 12:05:24
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 119. Conceito de cenas
 * *****
 */

var canvas = document.getElementById('canvas').getContext('2d');

document.addEventListener('keyup', function (e) {
    if (event.key === 'x' || event.key === 'X') {
    }
});

document.addEventListener('keydown', function (e) {
    if (event.key === 'x' || event.key === 'X') {
    }
});

let currentScene = {};

function changeScene(scene) {
    currentScene = scene;
}

let menu = {
    draw() {},
    update() {},
};

let game = {
    draw() {},
    update() {},
};

function main() {
    canvas.clearRect(0, 0, 500, 900);
    currentScene.draw();
    currentScene.update();
    requestAnimationFrame(main);
}

changeScene(menu);
main();
