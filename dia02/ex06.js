let opcao = 3
let saldo = 2050
console.log("1- Sacar  2- Depositar  3- Saldo" )
switch (opcao){
    case 1:
        console.log('Contando as notas...')
        break
    case 2:
        console.log('Qual valor deseja depositar?')
        break
    case 3:
        console.log(`O seu saldo é: ${saldo.toLocaleString('pt-BR',{style:"currency", currency:"BRL"})} `)     
        break
    default:
        console.log('Opção invalida')

}