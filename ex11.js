const prompt = require("prompt-sync")();
let nomes = [];

dados = prompt("Digite os nomes separados por '' (espaço): ");

nomes = dados.split(" ").map((nome,i) => nome = nome.trim());

nomes.forEach((nome,i) => console.log(nome))