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
 * ············ Aula 94. Colisão com a flor
 * *****
 */

class Obj {
    frame = 1; // jshint ignore:line
    timer = 0;

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

    animation(nome, quadros) {
        this.timer += 1;
        if (this.timer > 10) {
            this.timer = 0;
            this.frame += 1;
        }
        if (this.frame > quadros) {
            this.frame = 1;
        }
        this.color = 'assets/' + nome + this.frame + '.png';
    }
}

class Bee extends Obj {
    dir = 0; // jshint ignore:line

    move() {
        this.x += this.dir;
        if (this.x + this.width > areaTela.tx) {
            this.dir = 0;
            this.x = areaTela.tx - this.width;
        }
        if (this.x < areaTela.ix) {
            this.dir = 0;
            this.x = areaTela.ix;
        }
    }

    collide(obj) {
        if (
            this.x < obj.x + obj.width &&
            this.x + this.width > obj.x &&
            this.y < obj.y + obj.height &&
            this.y + this.height > obj.y
        ) {
            return true;
        } else {
            return false;
        }
    }
}

class Spider extends Obj {
    move() {
        this.y += 2;
        if (this.y > 280) {
            this.respaw();
        }
    }

    respaw() {
        this.y = -100;
        this.x = Math.random() * (380 - 0);
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

class Flower extends Spider {}

class Text {
    /**
     * Acrescenta um texto a tela do jogo
     *
     * @param {*} text frase ou informação que será mostrada
     * @param {*} px posição no eixo x inicial a informação que será mostrada
     * @param {*} py idem ao anterior, contudo no eixo y
     * @memberof Text
     */
    draw(text, px, py, color, font = '30px Arial') {
        canvas.font = font;
        canvas.fillStyle = color;
        canvas.fillText(text, px, py);
    }
}
