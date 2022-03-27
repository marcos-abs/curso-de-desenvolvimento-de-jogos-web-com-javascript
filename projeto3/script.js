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
 * ············ Aula 46. Conclusão + exercício
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

let jogando = true;
let start_game = true;
let escolha = 0;
let foiAtacado = false;
let houveContraAtaque = false;
heroi.guarda = false;

function Main() {
    if (start_game) {
        console.log('A batalha começa!');
        console.log('Um orc gigante apareceu!');
        console.log('----------');

        start_game = false;
    }

    if (jogando) {
        console.log('Heroi vida: ' + heroi.vida, ' Inimigo vida: ' + orc.vida);
        console.log('----------');
        console.log('Qual a sua escolha?');
        console.log('1 - Atacar: ');
        console.log('2 - Defender: ');
        console.log('3 - Contra-atacar: ');
        console.log('4 - Fugir! ');
        console.log('----------');

        escolha = prompt('Escolha a sua opção: ');
    }

    if (escolha == 1) {
        Atacar();
    } else if (escolha == 2) {
        Defender();
    } else if (escolha == 3) {
        ContraAtacar();
    } else if (escolha == 4) {
        Fugir();
        jogando = false;
    }

    if (jogando) {
        console.log('----------');
        orcAtaque();
        console.log('----------');
        if (orc.vida <= 0) {
            Vencer();
            jogando = false;
        }
        if (heroi.vida <= 0) {
            Morrer();
            jogando = false;
        }
    }
}

function Atacar() {
    heroi.guarda = false;
    houveContraAtaque = false;
    console.log('O Heroi ataca!');
    let dano = heroi.poder - orc.defesa;
    console.log('O Orc perdeu ' + dano + ' de vida!');
    if (orc.vida > dano) {
        orc.vida -= dano;
    } else {
        orc.vida = 0;
    }
}

function ContraAtacar() {
    if (foiAtacado && !houveContraAtaque) {
        heroi.guarda = true;
        houveContraAtaque = true;
        console.log('O Heroi contra-ataca!');
        let dano = heroi.poder * 2 - orc.defesa;
        console.log('O Orc perdeu ' + dano + ' de vida!');
        if (orc.vida > dano) {
            orc.vida -= dano;
        } else {
            orc.vida = 0;
        }
    } else {
        console.log('O Heroi não foi atacado ainda!');
    }
}

function Defender() {
    heroi.guarda = true;
    houveContraAtaque = false;
    console.log('O Heroi está em guarda.');
    console.log('Todo o dano é reduzido pela metade!');
}

function Fugir() {
    console.log('O Heroi está fugindo!');
    console.log('Que vergonha.');
}

function Morrer() {
    console.log('O Heroi está morto.');
    console.log('Fim de jogo.');
}

function Vencer() {
    console.log('O Orc está morto.');
    console.log('O Heroi venceu!');
    console.log('Fim de jogo.');
}

function orcAtaque() {
    console.log('O orc ataca!');
    let dano = 0;
    if (!heroi.guarda) {
        dano = orc.poder - heroi.defesa;
    } else {
        dano = orc.poder / 2 - heroi.defesa;
    }
    console.log('O heroi perdeu ' + dano + ' de vida.');
    if (heroi.vida > dano) {
        heroi.vida -= dano;
    } else {
        heroi.vida = 0;
    }
    foiAtacado = true;
}

console.clear();
while (jogando) {
    Main();
}
