// Esse código irá substituir todos os valores maiores de 10 na matriz por 0

let matriz = [
    [2, 45, 7, 9],
    [4, 12, 34, 5],
    [4, 13, 4, 6]
]
for(let i = 0; i < matriz.length; i++){
   for(let j = 0; j < matriz[i].length; j++){
    if(matriz[i][j] > 10 ){
        matriz[i][j] = 0 
    }
   }
    }
    console.log(matriz)