const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function obterEntrada(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, resolve);
  });
}

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque genérico";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

var continuar;
var nome, idade, tipo, heroi;

async function main() {
  do {
    nome = await obterEntrada("Digite o nome do herói: ");
    idade = parseInt(await obterEntrada("Digite a idade do herói: "));
    tipo = await obterEntrada(
      "Digite o tipo do herói (mago, guerreiro, monge, ninja): ",
    );

    heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();

    continuar = await obterEntrada(
      "Deseja criar outro herói? Digite 'sim' para continuar: ",
    );
  } while (continuar.toLowerCase() === "sim");

  rl.close();
}

// Chama a função principal
main();
