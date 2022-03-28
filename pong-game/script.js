/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/pong-game
 * File Created: Sunday, 27 March 2022 09:51:13
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Sunday, 27 March 2022 18:06:58
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ 69. Condição de vitória
 * *****
 */
let canvas = document.getElementById('canvas'); // integração com o HTML5
let container = canvas.getContext('2d');
let jogando = true;
let dualPlayers = false;

container.fillStyle = '#8b8b8b';

// let jogador1 = container.fillRect(20, 90, 15, 100); // <canvas id="canvas" width="430" height="280"></canvas>
let jogador1 = {
    px: 10,
    py: 90,
    tx: 15,
    ty: 100,
    dir: 0,
};

// let jogador2 = container.fillRect(400, 90, 15, 100); // <canvas id="canvas" width="430" height="280"></canvas>
let jogador2 = {
    px: 405,
    py: 90,
    tx: 15,
    ty: 100,
    dir: 0,
};

// para que inicie o jogo como single player.
if (dualPlayers) {
    jogador2.dir = 0;
} else {
    jogador2.dir = 8;
}

let area_tela = {
    ix: 0,
    iy: 0,
    tx: 430,
    ty: 280,
    placar_j1: {
        px: 45,
        py: 50,
    },
    placar_j2: {
        px: 290,
        py: 50,
    },
    message1_game: {
        px: 40,
        py: 250,
    },
    message2_game: {
        px: 100,
        py: 270,
    },
    final_j1: {
        px: 45,
        py: 150,
    },
    final_j2: {
        px: 250,
        py: 150,
    },
};

// let bolinha = container.fillRect(430 / 2 - 7.5, 280 / 2 - 7.5, 15, 15);
let bolinha = {
    px: area_tela.tx / 2 - 7.5,
    py: area_tela.ty / 2 - 7.5,
    tx: 15,
    ty: 15,
    dirx: 8,
    diry: 2,
};

// container.font = '40px Arial'; // não estava acatando por conta da modificação da fonte no DraWin
let pts1 = 0;
let pts2 = 0;
let delay = 100;

// document.addEventListener('keydown', function (e) { console.log('KeyDown:', e.keyCode); });
// document.addEventListener('keyup', function (e) { console.log('KeyUp:', e.keyCode); });
// para cima 38 para direita 39 para baixo 40 para esquerda 37

document.addEventListener(
    'keydown',
    function myListener(e) {
        if (e.keyCode === 83) {
            jogador1.dir = 8;
        }
        if (e.keyCode === 87) {
            jogador1.dir = -8;
        }
        if (dualPlayers) {
            if (e.keyCode === 40) {
                jogador2.dir = 8;
            }
            if (e.keyCode === 38) {
                jogador2.dir = -8;
            }
        } else {
            jogador2.dir = 8;
        }
        if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 27) {
            resetGame();
        }
        if (e.keyCode === 88) {
            jogando = false;
        }
        document.removeEventListener('keydown', myListener);
    },
    true,
);

document.addEventListener(
    'keyup',
    function myListener(e) {
        if (e.keyCode === 83 || e.keyCode === 87) {
            jogador1.dir = 0;
        }
        if (dualPlayers) {
            if (e.keyCode === 38 || e.keyCode === 40) {
                jogador2.dir = 0;
            }
        } else {
            jogador2.dir = 8;
        }
        if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 27) {
            resetGame();
        }
        if (e.keyCode === 88) {
            jogando = false;
        }
        document.removeEventListener('keyup', myListener);
    },
    true,
);

function resetGame() {
    // Ativar para 2 jogadores
    dualPlayers = true;

    // Bolinha
    bolinha.px = area_tela.tx / 2 - 7.5;
    bolinha.py = area_tela.ty / 2 - 7.5;
    bolinha.tx = 15;
    bolinha.ty = 15;
    bolinha.dirx = 8;
    bolinha.diry = 2;

    // Pontos
    pst1 = 0;
    pts2 = 0;

    // jogador 1
    jogador1.px = 10;
    jogador1.py = 90;
    jogador1.tx = 15;
    jogador1.ty = 100;
    jogador1.dir = 0;

    // jogador 2
    jogador2.px = 405;
    jogador2.py = 90;
    jogador2.tx = 15;
    jogador2.ty = 100;
    jogador2.dir = 0;
}

function Move_player() {
    if (jogador1.py < area_tela.iy) {
        jogador1.py = area_tela.iy;
    } else if (jogador1.py > area_tela.ty - jogador1.ty) {
        jogador1.py = area_tela.ty - jogador1.ty;
    }
    if (dualPlayers) {
        if (jogador2.py < area_tela.iy) {
            jogador2.py = area_tela.iy;
        } else if (jogador2.py > area_tela.ty - jogador2.ty) {
            jogador2.py = area_tela.ty - jogador2.ty;
        }
    } else if (
        jogador2.py < area_tela.iy ||
        jogador2.py > area_tela.ty - jogador2.ty
    ) {
        jogador2.dir *= -1;
    }
    jogador1.py += jogador1.dir;
    jogador2.py += jogador2.dir;
}

function Game_Over() {
    if (pts1 > 2 || pts2 > 2) {
        jogando = false;
    }
}

function Move_Ball() {
    bolinha.px += bolinha.dirx;
    bolinha.py += bolinha.diry;
}

function Points() {
    if (bolinha.px < area_tela.ix - delay) {
        bolinha.px = area_tela.tx / 2 - 7.5;
        bolinha.py = area_tela.ty / 2 - 7.5;
        bolinha.dirx *= -1;
        pts2 += 1;
    }
    if (bolinha.px > area_tela.tx + delay) {
        bolinha.px = area_tela.tx / 2 - 7.5;
        bolinha.py = area_tela.ty / 2 - 7.5;
        bolinha.dirx *= -1;
        pts1 += 1;
    }
}

function Collision_Ball() {
    if (
        bolinha.py + bolinha.ty >= jogador1.py &&
        bolinha.py <= jogador1.py + jogador1.ty &&
        bolinha.px <= jogador1.px + jogador1.tx &&
        bolinha.px >= jogador1.px - jogador1.tx
    ) {
        bolinha.dirx *= -1;
    } else if (
        bolinha.py + bolinha.ty >= jogador2.py &&
        bolinha.py <= jogador2.py + jogador2.ty &&
        bolinha.px <= jogador2.px + jogador2.tx &&
        bolinha.px >= jogador2.px - jogador2.tx
    ) {
        bolinha.dirx *= -1;
    }
    // if (
    //     bolinha.py <= area_tela.iy + bolinha.ty || // não é necessário adicionar ao cursor o tamanho da bolinha.
    //     bolinha.py >= area_tela.ty - bolinha.ty
    // ) {
    //     bolinha.diry *= -1;
    // }
    if (bolinha.py <= area_tela.iy || bolinha.py >= area_tela.ty - bolinha.ty) {
        bolinha.diry *= -1;
    }
}

function Draw() {
    container.font = '20px Arial';
    container.fillRect(jogador1.px, jogador1.py, jogador1.tx, jogador1.ty);
    container.fillRect(jogador2.px, jogador2.py, jogador2.tx, jogador2.ty);
    container.fillRect(bolinha.px, bolinha.py, bolinha.tx, bolinha.ty);
    container.fillText(
        'Score 1: ' + pts1,
        area_tela.placar_j1.px,
        area_tela.placar_j1.py,
    );
    container.fillText(
        'Score 2: ' + pts2,
        area_tela.placar_j2.px,
        area_tela.placar_j2.py,
    );
    container.font = '14px Arial';
    container.fillText(
        'Press <ENTER> or <SPACE> to change for dual players',
        area_tela.message1_game.px,
        area_tela.message1_game.py,
    );
    container.fillText(
        'and Press <X> para finish the game.',
        area_tela.message2_game.px,
        area_tela.message2_game.py,
    );
}

function DrawWin() {
    LimparTela();
    container.font = '30px Arial';
    container.fillText(
        'Score 1: ' + pts1,
        area_tela.final_j1.px,
        area_tela.final_j1.py,
    );
    container.fillText(
        'Score 2: ' + pts2,
        area_tela.final_j2.px,
        area_tela.final_j2.py,
    );
}

function LimparTela() {
    container.clearRect(area_tela.ix, area_tela.iy, area_tela.tx, area_tela.ty);
}

function Main() {
    if (jogando) {
        LimparTela();
        Draw();
        Move_Ball();
        Collision_Ball();
        Points();
        Move_player();
        Game_Over();
    } else {
        DrawWin();
        clearInterval(refreshIntervalId);
    }
}
let refreshIntervalId = setInterval(Main, 20);
