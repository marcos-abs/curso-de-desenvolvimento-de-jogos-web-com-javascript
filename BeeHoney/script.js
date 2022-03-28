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
 * ············ Aula 76. Introdução as classes
 * *****
 */

let canvas = document.getElementById('canvas').getContext('2d');

class Obj {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

let bee = new Obj(0, 0, 100, 100);
let spider = new Obj(100, 100, 100, 100);

function draw() {}

function update() {}

function main() {
    canvas.clearRect(0, 0, 430, 280);
    update();
    draw();
}

setInterval(main, 10);
