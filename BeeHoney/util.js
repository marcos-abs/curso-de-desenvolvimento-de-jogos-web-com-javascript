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
 * ············ Aula 88. Animando a aranha
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
    frame = 1;
    timer = 0;

    move() {
        this.x += this.dir;
    }

    animation() {
        this.timer += 1;
        if (this.timer > 10) {
            this.timer = 0;
            this.frame += 1;
        }
        if (this.frame > 4) {
            this.frame = 1;
        }
        this.color = 'assets/bee' + this.frame + '.png';
    }
}

class Spider extends Obj {
    frame = 1; // jshint ignore:line
    timer = 0;
    move() {
        this.y += 2;
        if (this.y > 280) {
            this.y = -50;
            this.x = Math.random() * (380 - 0);
        }
    }
    animation() {
        this.timer += 1;
        if (this.timer > 10) {
            this.timer = 0;
            this.frame += 1;
        }
        if (this.frame > 4) {
            this.frame = 1;
        }
        this.color = 'assets/spider' + this.frame + '.png';
    }
}

/**
 * Classe de manipulação do background do jogo
 *
 * @class Bg
 * @extends {Obj}
 */
class Bg extends Obj {
    /**
     * Método para movimentar o background durante o jogo
     *
     * @param {int} speed   => velocidade do movimento do background
     * @param {int} limit   => limite do eixo y
     * @param {int} pos     => posição inicial do background
     * @memberof Bg
     */
    move(speed, limit, pos) {
        this.y += speed;
        if (this.y > limit) {
            this.y = pos;
        }
    }
}
