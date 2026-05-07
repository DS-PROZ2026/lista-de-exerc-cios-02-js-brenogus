const prompt = require("prompt-sync")();
let nomes = [];

dados = prompt("Digite os nomes separados por '' (espaço): ");


nomes = dados.split(" ").map((nome,i) => nome = nome.trim());
nomes = nomes.map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase());
let contador = 0;
let nome;

do {
    
    if (contador < nomes.length) {
        
        
        if (nomes[contador] === "Ricardo") {
            break; 
        }
        
        contador++; 
    } else {
        console.log("Usuário não encontrado!");
        break;
    }
} while (true); 


if (nomes[contador] === "Ricardo") {
    console.log(`Usuário ${nomes[contador]} encontrado!`);
}