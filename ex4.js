const  prompt = require("prompt-sync")() ;
let temperaturas = [];

for (let i = 0; i < 7; i++) {
    temperaturas.push(Number(prompt("Digite a temperatura a ser registrada: ")))
}


let maiorTemperatura ;
let menorTemperatura ;
let somatorio = 0;
let media = 0;

temperaturas.forEach(function(temp,i){
    if (i === 0) {
        maiorTemperatura = temp;
        menorTemperatura = temp;
    }
    if (temp >= maiorTemperatura) {
        maiorTemperatura = temp;
    }
    else if (temp <= menorTemperatura) {
        menorTemperatura = temp;
    }
    somatorio = somatorio + temp;
})

media = (somatorio / temperaturas.length)

console.log(`Média: ${media}`)
console.log(`Maior temperatura: ${maiorTemperatura}`)
console.log(`Menor temperatura: ${menorTemperatura}`)
