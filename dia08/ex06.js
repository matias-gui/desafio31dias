// Essa função irá multiplicar todos os elementos da matriz por um valor fornecido.
let valor = 4
function multiplicarelementos(){

    let matriz = [
        [3, 5, 7],
        [5, 3, 8],
        [1, 9, 6]
    ]
    for(let i = 0; i < matriz.length;i++){
        for(let j = 0; j < matriz[i].length; j++){
            matriz[i][j] *= valor
        }
    }
    return matriz
}
console.log(multiplicarelementos())