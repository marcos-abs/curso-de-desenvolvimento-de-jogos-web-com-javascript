/**
 * *****
 * File: utils.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/FlappyBird
 * File Created: Saturday, 02 April 2022 00:03:34
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Monday, 04 April 2022 10:03:23
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 110. Canos aleatórios
 * *****
 */

class Area {
    /**
     * @param  {} x Posição em X
     * @param  {} y Posição em Y
     * @param  {} width Largura
     * @param  {} height Altura
     */
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
class Obj {
    frame = 0; // jshint ignore:line
    timer = 0;
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        let img = new Image();
        img.src = this.image;
        canvas.drawImage(img, this.x, this.y, this.width, this.height);
    }
    /**
     * @param  {} velocity Velocidade do objeto
     * @param  {} limit Limite do numero de arquivos de imagem
     * @param  {} name Prefixo do nome do arquivo
     */
    animation(velocity, limit, name) {
        this.timer += 1;
        if (this.timer >= velocity) {
            this.timer = 0;
            this.frame += 1;
        }
        if (this.frame >= limit) {
            this.frame = 0;
        }
        this.image = 'assets/images/' + name + this.frame + '.png';
    }
}

class Bg extends Obj {
    move(speed, limit, position) {
        this.x -= speed;
        if (this.x <= limit) {
            this.x = position;
        }
    }
}

class Ground extends Bg {}

class Bird extends Obj {
    vel = 2; // jshint ignore:line
    grav = 1;
    move() {
        if (this.vel < 10) {
            this.vel += this.grav;
        }
        this.y += this.vel;
    }

    limits() {
        if (this.y >= aTerra.y - this.height) {
            this.y = aTerra.y - this.height;
        } else if (this.y <= aTela.y) {
            this.y = aTela.y;
        }
    }
}

class Pipe extends Obj {
    /**
     * @param  {} vel Velocidade do objeto
     * @param  {} limit Limite de posicionamento do objeto
     * @param  {} new_pos Nova posição do objeto
     * @param  {} pipe2 Cano oposto
     */
    move(vel, limit, new_pos, pipe2) {
        this.x -= vel;
        if (this.x <= limit) {
            this.x = new_pos;
            this.y = Math.random() * (aTerra.y + aBird.height) + aBird.height; // ver https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random2
        }
        pipe2.x = this.x;
        pipe2.y = this.y - 450;
    }
}

class Coin extends Obj {
    /**
     * @param  {} pipe Objeto que será usado como base para a animação
     */
    move(pipe) {
        this.x = pipe.x + aBird.width / 2;
        this.y = pipe.y - aBird.height * 1.25;
    }
}
