// Conversão de um número decimal para binario
function decimalParaBinario(numero){
    const pilha = []
//Enquanto o número for maior que 0, vai ser dividido por 2 e seu resto será adicionado na pilha
    while (numero > 0 ){
        pilha.push(numero % 2 )
        numero = Math.floor(numero / 2)
    }
// O uso do "reverse" irá inverter a ordem dos elementos na pilha, e o uso do "join" retorna a pilha com string
    return pilha.reverse().join("")

}

console.log(decimalParaBinario(25))