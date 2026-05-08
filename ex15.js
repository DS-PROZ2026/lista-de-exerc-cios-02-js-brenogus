const prompt = require("prompt-sync")();

let manutencoes = [];
let somatorio = 0;
let maior = -Infinity; 
let maioresManutencoes = []

for (let i = 0; i < 6; i++) {
    let manutencao = parseFloat(prompt(`Insira o preço de manutenção no computador  com id ${i}: `));
    manutencoes.push(manutencao);
    somatorio += manutencao;

    if (manutencao > maior) {
        maior = manutencao;
        maioresManutencoes = [i]; 
    } else if (manutencao === maior) {
        maioresManutencoes.push(i);
    }

    
    
}

let media = somatorio / manutencoes.length;

console.log("\n______ CONCLUSÃO ______");
console.log(`Média de manutencoes foi: R$${media.toFixed(2)} .`);

console.log(`\nMaior manutencao: R$${maior}.`);
console.log(`Manutenção(ões) mais cara(s): ${maioresManutencoes.join(", ")}`);

