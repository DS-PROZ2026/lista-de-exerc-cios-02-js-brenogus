const prompt = require("prompt-sync")();

let pessoas = [];
let idades = [];
let somatorio = 0;
let maior = -Infinity; 
let pessoasMaisVelhas = []


for (let i = 0; i < 5; i++) {
    let nome = prompt(`Insira o nome da pessoa: `);
    pessoas.push(nome);

    let idade = parseFloat(prompt(`Digite a idade da pessoa: `))
    idades.push(idade)

    somatorio += idade;
    
    if(idade > maior) {
        maior = idade
        pessoasMaisVelhas = [nome]
    }
    else if (idade === maior) {
        maior = idade
        pessoasMaisVelhas.push(nome);
    }
}

let dados = []

pessoas.forEach((name,i) => {
    return dados.push({nome : name, idade : idades[i]})
})

let media = somatorio / idades.length;

console.log("\n______ CONCLUSÃO ______");
console.log(`Média de idades das pessoas foi: ${media.toFixed(2)} anos.`);

console.log(`\nMaior idade foi: ${maior} anos.`);
console.log(`pessoa(s) com a(s) maior(es) idade(s): ${pessoasMaisVelhas.join(", ")}`);

