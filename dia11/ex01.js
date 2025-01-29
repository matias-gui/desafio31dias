

class ContaBancaria{
    #saldo 

    constructor(saldo){
        this.#saldo = saldo
    }

    depositar(depositar){
        this.#saldo += depositar 
    }
    sacar(sacar){
        if(sacar > this.#saldo){
            console.log("Saldo insuficiente")
        }else{
            this.#saldo -= sacar
            console.log("Saque feito")
        }
    }
    consultarsaldo(novosaldo){
        
    }
}