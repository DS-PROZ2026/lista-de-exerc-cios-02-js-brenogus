const prompt = require("prompt-sync")();

let nomesVendedores = ["Antonio", "Ana", "Jorge", "Capitu", "Lucas"];
let totalVendas = [2300, 3520.87, 2998.75, 3612, 5000];

// 1. Zipando as listas de forma limpa
let listaZipada = nomesVendedores.map((nome, i) => ({ nome, vendas: totalVendas[i] }));

let somaVendas = 0;
let vendedorDestaque = [];

// 2. Encontrando o destaque e somando o total
listaZipada.forEach(function(vendedor) {
    if (vendedorDestaque.length === 0) {
        vendedorDestaque.push(vendedor);
    } else {
        const maiorVendaAtual = vendedorDestaque[0].vendas;

        if (vendedor.vendas > maiorVendaAtual) {
            // Encontrou alguém melhor: limpa a lista e adiciona o novo líder
            vendedorDestaque = [vendedor];
        } else if (vendedor.vendas === maiorVendaAtual) {
            // Empate: adiciona mais um ao destaque
            vendedorDestaque.push(vendedor);
        }
    }
    somaVendas += vendedor.vendas;
});

const media = somaVendas / listaZipada.length;

// 3. Exibindo resultados
console.log(`--- RELATÓRIO ---`);
console.log(`Vendedor(es) destaque:`);
vendedorDestaque.forEach(v => console.log(`- ${v.nome} (R$ ${v.vendas})`));

console.log(`\nMédia de vendas: R$ ${media.toFixed(2)}`);
console.log(`Vendedor(es) abaixo da meta (70% da média):`);

const meta = 0.70 * media;
listaZipada.forEach(function(vendedor) {
    if (vendedor.vendas < meta) {
        console.log(`- ${vendedor.nome}: R$ ${vendedor.vendas}`);
    }
});