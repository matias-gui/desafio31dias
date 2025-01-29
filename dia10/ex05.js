// Criação de uma classe Agenda para armazerna e exibir contatos

class Agenda{
    constructor (nome, telefone){
        this.nome = nome
        this.telefone = telefone
    }
    contato(){
        console.log(`Nome: ${this.nome}\nTelefone: ${this.telefone}\n`)
    }
} 
const contato1 = new Agenda("Paulo", 11111111)
contato1.contato()

const contato2 = new Agenda("João", 2222222)
contato2.contato()