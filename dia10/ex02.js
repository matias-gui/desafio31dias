// Criação de uma classe de Conta bancaria com métodos dépositar e sacar

class ContaBancaria{
    constructor(receber, retirar){
        this.receber = receber
        this.retirar = retirar
    }
    depositar(){
        console.log(`Valor ${this.receber} dépositado`)
    }
    sacar(){
        console.log(`Valor ${this.retirar} sacado.`)
    }
}
const conta1 = new ContaBancaria(300, 500)
conta1.depositar()
conta1.sacar()