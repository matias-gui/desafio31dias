// Criação de uma classe Agenda para armazerna e exibir contatos

class Contatos{
    constructor (nome, telefone){
        this.nome = nome
        this.telefone = telefone
    }
    contato(){
        console.log(`Nome: ${this.nome}\nTelefone: ${this.telefone}\n`)
    }
} 
const contato1 = new Contatos("Paulo", 11111111)
contato1.contato()

const contato2 = new Contatos("João", 2222222)
contato2.contato()