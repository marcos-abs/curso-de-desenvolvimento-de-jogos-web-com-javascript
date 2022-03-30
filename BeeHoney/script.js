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
 * ············ Aula 81. Classes e extensões
 * *****
 */

let canvas = document.getElementById('canvas').getContext('2d');

let bee = new Bee(150, 150, 50, 50, 'yellow');
let spider = new Spider(50, 50, 50, 50, 'black');

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
    bee.draw();
    spider.draw();
}

function update() {
    bee.move();
    spider.move();
}

function main() {
    canvas.clearRect(0, 0, 430, 280);
    update();
    draw();
}

setInterval(main, 10);
