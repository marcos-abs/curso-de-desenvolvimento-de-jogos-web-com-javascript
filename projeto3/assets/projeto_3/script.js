var heroi = {
  //Status
  nome: "Alast",
  vida: 100,
  poder: 10,
  defesa: 5,

  //Habilidades
  guarda: true,
};

var orc = {
  nome: "Onyx",
  vida: 120,
  poder: 20,
  defesa: 6,
};

var jogando = true;
var start_game = true;

function Main() {

  if (start_game) {
    console.log("A batalha começa!");
    console.log("Um orc gigante apareceu!");
    start_game = false
  }

  console.log("Heroi: " + heroi.vida, "inimigo: " + orc.vida);
  console.log("Qual a sua escolha?");
  console.log("1 - Atacar:");
  console.log("2 - Defender:");
  console.log("3 - Fugir!");

  let escolha = prompt("Escolha a sua opção: ");

  if (escolha == 1) {
    Atacar();
  }
  else if (escolha == 2) {
    Defender();
  }
  else if (escolha == 3) {
    Fugir();
  }
}

function Atacar() {
  console.log("O heroi ataca!");
  let dano = heroi.poder - orc.defesa;
  console.log("O Orc perdeu " + (dano) + " de vida:");
  orc.vida -= dano
}

function Defender() {
  heroi.guarda = true;
  console.log("o heroi esta em guarda.");
  console.log("Todo o dano é reduzido pela metade.");
}

function Fugir() {
  console.log("O heroi esta fugindo!");
  console.log("Que vergonha.");
  jogando = false;
}

function orcAtaque() {
  console.log("O orc ataca!");
  let dano = orc.poder - heroi.defesa;
  console.log("O heroi perdeu " + (dano) + " de vida:");
  heroi.vida -= dano;
}

while (jogando) {
  Main();
  console.clear();
}
