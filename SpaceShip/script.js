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
 * ············ Aula 133. Conceito de grupos
 * *****
 */

const aFundo = new Area(0, 0, 430, 560, 1);
const aNave = new Area(200, 495, 60, 50);
const aTiro = new Area(0, 0, 2, 10);
let canvas = document.getElementById('canvas').getContext('2d');
canvas.imageSmoothingEnabled = false;

let pontos = 0;

document.addEventListener('click', function (e) {
    if (currentScene.click) {
        currentScene.click();
    }
});

document.addEventListener('mousemove', function (e) {
    if (currentScene.moveShip) {
        currentScene.moveShip(e);
    }
});

let currentScene = {};

function changeScene(scene) {
    currentScene = scene;
}

let groupShoot = [];
let shoot = new Obj(
    aTiro.x,
    aTiro.y,
    aTiro.width,
    aTiro.height,
    'assets/tiro.png',
);

let infinityBg = {
    bg: new Obj(
        aFundo.x,
        aFundo.y,
        aFundo.width,
        aFundo.height,
        'assets/fundo.png',
    ),
    bg2: new Obj(
        aFundo.x,
        -(aFundo.y + aFundo.height),
        aFundo.width,
        aFundo.height,
        'assets/fundo.png',
    ),
    moveBg() {
        this.bg.y += aFundo.speed;
        this.bg2.y += aFundo.speed;
        if (this.bg.y >= aFundo.y + aFundo.height) {
            this.bg.y = aFundo.y;
        }
        if (this.bg2.y >= aFundo.y) {
            this.bg2.y = -(aFundo.y + aFundo.height);
        }
    },
    draw() {
        this.bg.draw();
        this.bg2.draw();
    },
};

let menu = {
    title: new Text('SpaceShip'),
    label: new Text('Click to Play'),
    ship: new Obj(
        aNave.x,
        aNave.y,
        aNave.width,
        aNave.height,
        'assets/nave.png',
    ),
    click() {
        changeScene(game);
    },
    draw() {
        infinityBg.draw();
        this.title.drawText(60, 'Arial', 75, 250, 'white');
        this.label.drawText(20, 'Arial', 165, 345, 'white');
        this.ship.draw();
    },
    update() {
        infinityBg.moveBg();
    },
};

let game = {
    score: new Text('Pontos: ' + pontos, 'Arial', 20, 20, 'white'),
    ship: new Obj(
        aNave.x,
        aNave.y,
        aNave.width,
        aNave.height,
        'assets/nave.png',
    ),
    click() {},
    moveShip(event) {
        this.ship.x = event.offsetX - this.ship.width / 2;
        this.ship.y = event.offsetY - this.ship.height / 2;
    },
    draw() {
        infinityBg.draw();
        this.score.drawText(20, 'Arial', 20, 30, 'white');
        this.ship.draw();
    },
    update() {
        infinityBg.moveBg();
    },
};

let gameOver = {
    bg: new Obj(
        aFundo.x,
        aFundo.y,
        aFundo.width,
        aFundo.height,
        'assets/fundo.png',
    ),

    score: new Text('Pontos: ' + pontos, 'Arial', 20, 20, 'white'),

    draw() {
        infinityBg.draw();
        this.score.drawText(20, 'Arial', 20, 30, 'white');
    },
    update() {
        infinityBg.moveBg();
    },
};

function main() {
    canvas.clearRect(0, 0, 500, 900);
    currentScene.draw();
    currentScene.update();
    requestAnimationFrame(main);
}

changeScene(menu);
main();
