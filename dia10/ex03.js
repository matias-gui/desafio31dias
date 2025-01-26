// Criação de uma classe para saudações de boas vindas 

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    saudacao(){
        console.log(`Bem-vindo ${this.nome}`)
    }
}
const pessoa1 = new Pessoa("Paulo")
pessoa1.saudacao()

const pessoa2 = new Pessoa("João")
pessoa2.saudacao()

const pessoa3 = new Pessoa("Kessya")
pessoa3.saudacao()