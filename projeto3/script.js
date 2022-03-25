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
 * ············ Aula 40. Colocando em prática
 * *****
 */

let heroi = {
    nome: 'Alast',
    vida: 100,
    poder: 10,
    defesa: 5,
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

    let escolha = 1;

    if (escolha == 1) {
        Atacar();
    }
}

function Atacar() {
    console.log('O Heroi ataca!');
    console.log('O Orc perdeu ' + (heroi.poder - orc.defesa) + ' de vida!');
}

Main();
