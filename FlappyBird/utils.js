/**
 * *****
 * File: utils.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/FlappyBird
 * File Created: Saturday, 02 April 2022 00:03:34
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Saturday, 02 April 2022 00:03:36
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
     * @param  {} px Posição em X
     * @param  {} py Posição em Y
     * @param  {} width Largura
     * @param  {} height Altura
     */
    constructor(px, py, width, height) {
        this.px = px;
        this.py = py;
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
        if (this.y >= aTerra.iy - this.height) {
            this.y = aTerra.iy - this.height;
            this.vel = 0;
        } else if (this.y <= aTela.iy) {
            this.y = aTela.iy;
            this.vel = 0;
        }
    }
}

class Pipe extends Obj {
    /**
     * @param  {} velocity Velocidade do objeto
     * @param  {} limit Limite de posicionamento do objeto
     * @param  {} new_pos Nova posição do objeto
     */
    move(velocity, limit, new_pos, pipe2, diff) {
        this.x -= velocity;
        if (this.x <= limit) {
            this.x = new_pos;
            // this.y = Math.random() * (aTela.height - aTerra.height) + diff; // jshint ignore:line
            this.y =
                Math.random() * (aTela.py + aTela.height - aTerra.py) +
                aTerra.py;
        }
        pipe2.x = this.x;
        if (pipe2.y > aTerra.py) {
            pipe2.y = aTerra.py - pipe2.height / 5;
        }
    }
}

class Coin extends Obj {
    move(pipe) {
        this.x = pipe.x + pipe.width / 2;
        // this.y = pipe.y + pipe.height * -1;
        this.y = pipe.y - 150;
        // UNDONE: parei aqui em 3m16s de 4m50s
        // FIXME: pipeDown está sumindo após a primeira volta
        // BUG: bird está passando do limite da terra e do céu também
    }
}
