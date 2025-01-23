//Esse código verifica quantos números pares tem na matriz
let pares = 0
let matriz = [
    [3, 5, 6],
    [4, 9, 5],
    [2, 8, 12]
]
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz [i] [j] % 2 == 0 ){
            pares+=1
        }
    }
}
console.log("Ao todo temos",pares,"números pares na matriz.")