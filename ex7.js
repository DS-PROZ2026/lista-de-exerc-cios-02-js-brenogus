
let frotaManutencao = []
let caminhoes = [
    {modelo:"modelo 1", quilometragem: 12000, dataUltimaRevisao: 12 },
    {modelo: "modelo 2", quilometragem: 1000, dataUltimaRevisao: 3},
    {modelo:"modelo 3", quilometragem: 8000, dataUltimaRevisao: 15 },
    {modelo:"modelo 4", quilometragem: 5000, dataUltimaRevisao: 4 },
    {modelo:"modelo 5", quilometragem: 18000, dataUltimaRevisao: 10 }
    ]
    
caminhoes.forEach(function(caminhao, i) {
    if (caminhao.quilometragem > 10000 || caminhao.dataUltimaRevisao > 6) {
        frotaManutencao.push(caminhao);
    }
})


console.log("_______caminhoes que precisam de manutencao__________")
for (let i = 0; i < frotaManutencao.length; i++) {
    console.log(frotaManutencao[i].modelo)
}
