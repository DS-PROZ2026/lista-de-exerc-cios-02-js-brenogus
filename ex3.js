let prompt = require("prompt-sync")()

let mochila = []
let itens = ["barra de proteina", "bússola", "fosforo", "corda", "garrafa de água", "faca"]
let resposta
let contador = 0

itens.forEach(function(item) {
    if (itens.indexOf(item) < 4) {
        mochila.push(item)
        console.log(`${item} adicionado com sucesso !!!`)
    }

    else {
        resposta = prompt("Mochila cheia, deseja excluir o primeiro item mais antigo da mochila? (s/n)")
        resposta.toLowerCase()
        if (resposta === "s") {
            mochila.splice(contador,1,item)
            console.log(`${item} adicionado com sucesso !!!`)
        }
        else if (resposta =="n"){
            console.log("Nenhum item trocado na mochila")
        }

        else {
            console.log("Entrada inválida")
        }
    }
}

)

console.log("Mochila atualizada")
for (let item of mochila) {
    console.log(`${item}`)
}