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
 * ············ Aula 80. Movimentando a abelhinha
 * *****
 */

let canvas = document.getElementById('canvas').getContext('2d');

let bee = new Obj(150, 150, 50, 50, 'yellow');
let spider = new Obj(50, 50, 50, 50, 'black');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        bee.x -= 5;
    }
    if (event.key === 'd') {
        bee.x += 5;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'a') {
        bee.x -= 5;
    }
    if (event.key === 'd') {
        bee.x += 5;
    }
});

function draw() {
    bee.draw();
    spider.draw();
}

function update() {}

function main() {
    canvas.clearRect(0, 0, 430, 280);
    update();
    draw();
}

setInterval(main, 10);
