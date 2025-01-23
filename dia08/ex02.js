// Essa função irá receber uma matriz, e retornará a soma de todos os elementos

function somamatriz(){
    let soma = 0
    const matriz = [
        [2, 6, 7],
        [8, 3, 5]
    ]
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length;j++){
            soma+=matriz[i][j]
        }
    }
    return soma
}
console.log("A soma dos elementos da matriz é:",somamatriz())