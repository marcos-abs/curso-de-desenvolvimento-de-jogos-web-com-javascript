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
 * ············ Aula 113. Mostrando, ou não, os objetos
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
    set_visible = true;

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

    collide(obj) {
        if (
            this.x < obj.x + obj.width &&
            this.x + this.width > obj.x &&
            this.y < obj.y + obj.height &&
            this.y + this.height > obj.y
        ) {
            obj.set_visible = false;
            return true;
        } else {
            return false;
        }
    }

    respaw() {
        this.x = respawPosition;
        this.y = this.calcPosition();
    }

    calcPosition() {
        let position = 0;
        while (true) {
            position = Math.random() * (aTerra.y + aBird.height) + aBird.height; // ver https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random2
            if (
                position + this.height > aTela.y &&
                position < aTerra.y &&
                position > aTela.y
            ) {
                break;
            }
        }

        return position;
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
    move(vel, limit, new_pos, pipeDown) {
        this.x -= vel;
        if (this.x <= limit) {
            this.x = new_pos;
            this.y = this.calcPosition();
        }
        pipeDown.x = this.x;
        pipeDown.y = this.y - (aPipeUp.height + aBird.height) * 1.225; // 0.025 é a distância entre os canos e o pássaro
    }
}

class Coin extends Obj {
    draw() {
        if (this.set_visible) {
            let img = new Image();
            img.src = this.image;
            canvas.drawImage(img, this.x, this.y, this.width, this.height);
        }
    }
    // UNDONE: parei aqui em 2m2s de 2m44s da aula 113. Mostrando, ou não, os objetos
    /**
     * @param  {} pipe Objeto que será usado como base para a animação
     */
    move(coin) {
        this.x = coin.x + aBird.width / 2; // a metade do tamanho do pássaro
        this.y = coin.y - aBird.height * 2; // 51 é a distância entre o cano e a moeda
        if (this.x <= -50) {
            this.set_visible = true;
        }
    }

    respaw() {
        this.x = respawPosition;
        this.y = this.calcPosition();
        this.set_visible = true;
    }
}

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
