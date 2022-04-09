/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/SpaceShip
 * File Created: Thursday, 07 April 2022 11:25:38
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Saturday, 09 April 2022 12:38:32
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 125. Adicionando OBJs no game
 * *****
 */

const aFundo = new Area(0, 0, 430, 560);
const aNave = new Area(200, 500, 60, 50);
let canvas = document.getElementById('canvas').getContext('2d');
canvas.imageSmoothingEnabled = false;

let pontos = 0;

document.addEventListener('click', function (e) {
    changeScene(game);
});

let currentScene = {};

function changeScene(scene) {
    currentScene = scene;
}

let menu = {
    bg: new Obj(
        aFundo.x,
        aFundo.y,
        aFundo.width,
        aFundo.height,
        'assets/fundo.png',
    ),
    title: new Text('SpaceShip'),
    draw() {
        this.bg.draw();
        this.title.drawText(40, 'Arial', 125, 290, 'white');
    },
    update() {},
};

let game = {
    bg: new Obj(
        aFundo.x,
        aFundo.y,
        aFundo.width,
        aFundo.height,
        'assets/fundo.png',
    ),
    score: new Text('Pontos: ' + pontos, 'Arial', 20, 20, 'white'),
    ship: new Obj(
        aNave.x,
        aNave.y,
        aNave.width,
        aNave.height,
        'assets/nave.png',
    ),
    draw() {
        this.bg.draw();
        this.score.drawText(20, 'Arial', 20, 30, 'white');
        this.ship.draw();
    },
    update() {},
};

function main() {
    canvas.clearRect(0, 0, 500, 900);
    currentScene.draw();
    currentScene.update();
    requestAnimationFrame(main);
}

changeScene(menu);
main();
