let prompt = require("prompt-sync")();

let listaProibida = ["Fulano","ciclano","beltrano"]
let visitantesAutorizados = []
let proibido = false

let nome = prompt("Digite um nome: ")

for (let nomeProibido of listaProibida) {
    if (nomeProibido === nome) {
        console.log(`ALERTA. Segurança acionada para ${nome}`)
        proibido = true
        break
    }
}

if (proibido !== true) {
    visitantesAutorizados.push(nome)
    console.log(`${nome} adicionado`)
}


