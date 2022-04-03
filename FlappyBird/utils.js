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
 * ············ Aula 108. Adicionando canos
 * *****
 */
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
        if (this.y >= areaTerra.iy - this.height + 10) {
            this.y = areaTerra.iy - this.height + 10;
            this.vel = 0;
        } else if (this.y <= areaTela.iy) {
            this.y = areaTela.iy;
            this.vel = 0;
        }
    }
}
