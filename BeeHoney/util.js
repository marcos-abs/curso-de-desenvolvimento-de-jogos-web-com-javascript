/**
 * *****
 * File: util.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/BeeHoney
 * File Created: Monday, 28 March 2022 18:29:54
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Wednesday, 30 March 2022 08:34:45
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 85. Adicionando o BG
 * *****
 */

class Obj {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        // canvas.fillStyle = this.color;
        // canvas.fillRect(this.x, this.y, this.width, this.height);
        let img = new Image();
        img.src = this.color;
        canvas.drawImage(img, this.x, this.y, this.width, this.height);
    }
}

class Bee extends Obj {
    dir = 0; // jshint ignore:line

    move() {
        this.x += this.dir;
    }
}

class Spider extends Obj {
    move() {
        this.y += 2;
        if (this.y > 280) {
            this.y = -50;
            this.x = Math.random() * (380 - 0);
        }
    }
}
