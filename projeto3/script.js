/**
 * *****
 * File: script.js
 * Project: Curso de desenvolvimento de jogos web com Javascript
 * Path: /home/desenvolvedor/cursos/curso-jogos-web-javascript/projeto3
 * File Created: Friday, 25 March 2022 16:43:27
 * Author: Marcos Antônio Barbosa de Souza (marcantech@uol.com.br)
 * -----
 * Last Modified: Friday, 25 March 2022 17:13:18
 * Modified By: Marcos Antônio Barbosa de Souza (<marcantech@uol.com.br>)
 * -----
 * Copyright (c) 2022 All rights reserved, Marcant Tecnologia da Informação
 * -----
 * Description:
 * ············ Aula 35. Concatenação de textos e números
 * *****
 */

// Dados do personagem
let nome = 'Herói';
let vida = 100;
let forca = 10;
let defesa = 5;

// Habilidades
let pulo = false;
let fogo = false;
let nadar = true;

// Dados do monstro
let monstro_nome = 'Lesma-Gigante';
let monstro_vida = 800;
let monstro_forca = 50;
let monstro_defesa = 1;

// Operadores + - * /
console.log(
    'A Lesma Gigante atacou o herói: O herói sofreu ' +
        (vida - monstro_forca) +
        ' de dano.',
);
