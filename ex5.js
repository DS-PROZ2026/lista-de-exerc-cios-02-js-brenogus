const prompt = require("prompt-sync")();


let modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"]
let precos  = [110000, 135000, 128000, 105000, 180000]
let modelosValidados = []

let orcamentoMaximo = Number(prompt("Digite seu orçamento máximo: "));

for (let i = 0; i < precos.length; i++) {
    if (orcamentoMaximo >= precos[i]) {
        modelosValidados.push(modelos[i]);
    }
}

if (modelosValidados.length === 0) {
    console.log(`Que tal olhar nossa seção de seminovos?`)
}

else {
    console.log("_______________Modelos validados__________________")
    for (let i = 0; i < modelosValidados.length; i++) {
        console.log(`Modelo: ${modelosValidados[i]}`)
    }
}
