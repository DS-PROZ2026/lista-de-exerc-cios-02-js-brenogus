const prompt = require("prompt-sync")();

let kilometragem = [];
let somatorio = 0;
let maior = -Infinity; 
let caminhoesMaior = [];
let menor = Infinity;   
let caminhoesMenor = [];

for (let i = 0; i < 6; i++) {
    let kmAtual = parseFloat(prompt(`Insira a quantidade de kilometragem no caminhao com id ${i}: `));
    kilometragem.push(kmAtual);
    somatorio += kmAtual;

    if (kmAtual > maior) {
        maior = kmAtual;
        caminhoesMaior = [i]; 
    } else if (kmAtual === maior) {
        caminhoesMaior.push(i);
    }

    
    if (kmAtual < menor) {
        menor = kmAtual;
        caminhoesMenor = [i]; 
    } else if (kmAtual === menor) {
        caminhoesMenor.push(i);
    }
}

let media = somatorio / kilometragem.length;

console.log("\n______ CONCLUSÃO ______");
console.log(`Média de kilometragem foi: ${media.toFixed(2)} KM.`);

console.log(`\nMaior kilometragem: ${maior} KM.`);
console.log(`Caminhões com maior KM: ${caminhoesMaior.join(", ")}`);

console.log(`\nMenor kilometragem: ${menor} KM.`);
console.log(`Caminhões com menor KM: ${caminhoesMenor.join(", ")}`);