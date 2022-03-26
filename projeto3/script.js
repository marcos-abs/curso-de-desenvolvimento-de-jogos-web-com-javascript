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
 * ············ Aula 42. Função de Fugir
 * *****
 */

let heroi = {
    // Características
    nome: 'Alast',
    vida: 100,
    poder: 10,
    defesa: 5,

    // Habilidades
    guarda: true,
};

let orc = {
    nome: 'Onix',
    vida: 120,
    poder: 20,
    defesa: 6,
};

function Main() {
    console.log('A batalha começa!');
    console.log('Um orc gigante apareceu!');
    console.log('Qual a sua escolha?');
    console.log('1 - Atacar: ');
    console.log('2 - Defender: ');
    console.log('3 - Fugir! ');

    let escolha = 3;

    if (escolha == 1) {
        Atacar();
    } else if (escolha == 2) {
        Defender();
    } else if (escolha == 3) {
        Fugir();
    }
}

function Atacar() {
    console.log('O Heroi ataca!');
    console.log('O Orc perdeu ' + (heroi.poder - orc.defesa) + ' de vida!');
}

function Defender() {
    heroi.guarda = true;
    console.log('O Heroi está em guarda.');
    console.log('Todo o dano é reduzido pela metade!');
}

function Fugir() {
    console.log('O Heroi está fugindo!');
    console.log('Que vergonha.');
}

Main();
