//IRAR FAZER O FATORIAL DE "5"

    // Usando o WHILE

/*
let fatorial =5
let cont = 0 
let soma = 1
while(cont < fatorial){
    cont++
    soma*=cont
   
}
console.log(`O fatorial de ${fatorial} é: ${soma}`)
*/

    // Usando o FOR 

let fatorial = 5
let num = 1
for(let i = 1; i <= fatorial; i++){
    num*=i
}
console.log(`O fatorial de ${fatorial} é: ${num}`)