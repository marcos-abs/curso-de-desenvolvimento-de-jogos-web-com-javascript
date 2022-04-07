/**
 * *****
 * File: util.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/SpaceShip
 * File Created: Thursday, 07 April 2022 11:25:38
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Thursday, 07 April 2022 11:47:39
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 118. Base do projeto
 * *****
 */

class Area {
    /**
     * Método construtor da classe
     *
     * @param  {} x Posição em X
     * @param  {} y Posição em Y
     * @param  {} width Largura da área
     * @param  {} height Altura da área
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
    is_visible = true;

    /**
     * Método construtor da classe do objeto
     *
     * @param  {} x Posição em X
     * @param  {} y Posição em Y
     * @param  {} width  Largura da imagem
     * @param  {} height Altura da imagem
     * @param  {} image Imagem do objeto
     */
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    /**
     * Desenha o objeto na tela
     */
    draw() {
        let img = new Image();
        img.src = this.image;
        canvas.drawImage(img, this.x, this.y, this.width, this.height);
    }
    /**
     * Cria uma animação de movimento do objeto
     *
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
    /**
     * Verifica se o objeto colidiu com outro objeto (obj)
     *
     * @param  {} obj Objeto a ser verificado
     */
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
    draw(text, px, py, color, size = 30, font = 'Arial') {
        canvas.font = `${size}px ${font}`;
        canvas.fillStyle = color;
        canvas.fillText(text, px, py);
    }
}
