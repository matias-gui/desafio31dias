// Criação de uma classe com subclasse que adiciona juros ao saldo

class Conta{
    constructor(saldo){
        this.saldo = saldo
    }

    saldoConta(){
        console.log(`O saldo da conta é : ${this.saldo}`)
    }
}

class ContaPoupanca extends Conta{
    constructor(saldo, juros){
        super(saldo)
        this.juros = juros
    }

    jurosSaldo(){
        const juros = this.saldo + this.juros
        console.log(`O saldo atual com os juros é: ${juros}`)
    }
}

const conta1 = new ContaPoupanca(2000, 8)
conta1.saldoConta()
conta1.jurosSaldo()