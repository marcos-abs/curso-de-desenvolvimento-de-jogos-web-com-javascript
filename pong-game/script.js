/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/pong-game
 * File Created: Sunday, 27 March 2022 09:51:13
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Sunday, 27 March 2022 09:51:15
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 54. Trabalhando com textos
 * *****
 */
let canvas = document.getElementById('canvas'); // integração com o HTML5
let container = canvas.getContext('2d');
container.fillStyle = '#8b8b8b';
let jogador1 = container.fillRect(20, 90, 15, 100); // <canvas id="canvas" width="430" height="280"></canvas>
let jogador2 = container.fillRect(400, 90, 15, 100); // <canvas id="canvas" width="430" height="280"></canvas>
let bolinha = container.fillRect(430 / 2 - 7.5, 280 / 2 - 7.5, 15, 15);

container.font = '20px Arial';
let pts1 = 0;
let pts2 = 0;
let score1 = container.fillText('Score 1: ' + pts1, 45, 50);
let score2 = container.fillText('Score 2: ' + pts2, 290, 50);
