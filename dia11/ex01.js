// Classe com saldo privado e métodos para depositar, sacar e consultar saldo

class ContaBancaria{
    #saldo 

    constructor(saldo){
        this.#saldo = saldo
    }

    depositar(valorDepositar){
        if(valorDepositar <= 0 ){
            console.log("Valor inválido !!")
            return
        }
        this.#saldo += valorDepositar 
        console.log("Valor", valorDepositar,"depositado")
    }
    sacar(valorSacar){
        if(valorSacar <= 0 ){
            console.log("Valor inválido !!")
        }
        if(valorSacar > this.#saldo){
            console.log("Saldo insuficiente")
        }else{
            this.#saldo -= valorSacar
            console.log(`Saque de ${valorSacar} realizado com sucesso!!`)
        }
    }
    consultarSaldo(){
        console.log("O saldo atual é", this.#saldo)
        
    }
}

const caixa = new ContaBancaria(1000)
caixa.depositar(3000)
caixa.sacar(20)
caixa.consultarSaldo()