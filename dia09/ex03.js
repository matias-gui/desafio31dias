// Essa função faz a soma dos números de um array, usando a recursão

function somaarray(array){
   if(array.length == 0) return 0
   return array[0] + somaarray(array.slice(1))

}

console.log(somaarray([1, 4, 5, 6]))