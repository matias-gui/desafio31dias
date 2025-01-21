// Essa função irá receber um array de números e retornará a soma deles.

function somaarray(){
   const array = [1, 4, 5, 10, 6]
   let soma = 0
   for(let i = 0; i < array.length; i++){
    soma+=array[i]
   }
   return soma
}
console.log(somaarray())