const prompt = require("prompt-sync")();

let litros = [];
let consumo = 0;
let maior = [0];
let dias = []
for (let i = 0; i < 6;i++) {
     litros.push(parseFloat(prompt(`Insira a quantidade de litros no ${i + 1} dia: `)));
     if (litros[i] === maior[0]) {
        maior.push(litros[i])
        dias.push(i);
     }
     
     else if (litros[i] > maior) {
        maior = [];
        dias = [];
        maior.push(litros[i]);
        dias.push(i);
     } 

     consumo += litros[i];
}

let media = consumo / litros.length;

console.log("______conclusão______");
console.log(`Média ${media.toFixed(2)}.`)
console.log(`Maior gasto: ${maior[0]}L nos dias: `)
dias.forEach((dia) => console.log(`${dia + 1}`));
