const prompt = require("prompt-sync")();

let temperaturas = [];
let somatorio = 0;
let maior = [0];
let sensores = []

for (let i = 0; i < 6;i++) {
     temperaturas.push(parseFloat(prompt(`Insira a quantidade de temperaturas no ${i + 1} dia: `)));
     if (temperaturas[i] === maior[0]) {
        maior.push(temperaturas[i])
     }
     
     else if (temperaturas[i] > maior) {
        maior = [];
        maior.push(temperaturas[i]);
     } 

     if (temperaturas[i] > 35) {
        sensores.push(i);
     }

     somatorio += temperaturas[i];
}

let media = somatorio / temperaturas.length;

console.log("______conclusão______");
console.log(`Média de temperatura foi: ${media.toFixed(2)}.`)
console.log(`Maior temperatura: ${maior[0]}º. `)
console.log("Sensores em alerta: ")
sensores.forEach((sensor) => console.log(`${sensor}`));


