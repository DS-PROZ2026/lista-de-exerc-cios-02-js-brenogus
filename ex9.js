
const funcionarios = [
    {nome: "Ana", salario: 2500},
    {nome: "Pedro", salario:4200},
    {nome: "Marcos", salario: 1800},
    {nome: "Julia", salario: 3500}
]
console.log("________Salários maiores que R$ 3000,00____________")
funcionarios.forEach((funcionario,i) => {
    if (funcionario.salario > 3000) {
        console.log(`${funcionario.nome} : ${funcionario.salario}`);
    }
})  
