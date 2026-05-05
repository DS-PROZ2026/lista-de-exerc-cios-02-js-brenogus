let prompt = require("prompt-sync")();

let nome;
let atletas = []

for (let i = 0; i < 5; i++) {
    nome = prompt(`Digite o nome do ${i + 1} maratonista: `)
    atletas.push(nome)
}


for (let i = 0; i < 5; i++) {
    if (i === 0) {
        console.log(`Medalha de ouro: ${atletas[i]}`)
    }

    else if(i === 1) {
        console.log(`Medalha de prata: ${atletas[i]}`)
    }

    else if(i === 2) {
        console.log(`Medalha de bronze: ${atletas[i]}`)
    }

    else {
        console.log(`Medalha de honra: ${atletas[i]}`)
    }
    
}