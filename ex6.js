let produtos = ["Monitor", "Mouse", "Teclado", "Cabo HDMI"];
let quantidades = [10, 2, 8, 3]
let produtosValidados = []

console.log("_________Produtos validados _________")
console.log()
for (let i = 0; i < quantidades.length; i++) {
    if (quantidades[i] < 5) {
        produtosValidados.push(produtos[i]);
        console.log(`Produto ${produtos[i]} inserido !`);
    }
}

