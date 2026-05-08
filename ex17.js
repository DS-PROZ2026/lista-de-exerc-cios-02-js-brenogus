const prompt = require("prompt-sync")();

let destinos = [];
let somatorioTotal = 0; // Nome melhorado para clareza
let valoresTotais = [];

for (let i = 0; i < 3; i++) {
    let nomeDestino = prompt(`Digite o nome do destino ${i + 1}: `);
    let precoPassagem = parseFloat(prompt("Digite o preço da passagem: "));
    let valorHotel = parseFloat(prompt("Digite quanto foi gasto no hotel: "));
    
    // Acumula o valor total da viagem (passagem + hotel)
    somatorioTotal += (precoPassagem + valorHotel);

    destinos.push({
        nome: nomeDestino, 
        preco: precoPassagem, 
        gastoHotel: valorHotel
    });
}

let media = somatorioTotal / destinos.length;
console.log(`\nMédia de custo por viagem: R$ ${media.toFixed(2)}`);

console.log("\nDestinos abaixo de R$ 1000.00: ");
destinos.forEach((destino) => {
    let precoDaViagem = destino.preco + destino.gastoHotel;
    valoresTotais.push(precoDaViagem);
    
    if (precoDaViagem < 1000) {
        console.log(`- ${destino.nome} (Total: R$ ${precoDaViagem.toFixed(2)})`);
    }
});

// Correção do Math.max usando o spread operator (...)
let viagemMaisCara = Math.max(...valoresTotais);
console.log(`\nViagem mais cara: R$ ${viagemMaisCara.toFixed(2)}`);