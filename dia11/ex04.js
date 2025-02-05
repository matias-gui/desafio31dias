// Criação de uma classe, com valores privados, que só é possivel ter acesso acertando a senha

class Cofre{
    #valor1
    #valor2
    #valor3

    constructor(){
        this.#valor1 = "Joias"
        this.#valor2 = "Diamantes"
        this.#valor3 = 3500
        this.senha = "paulo2025"
    }

    acessar(senha){
        if( senha === this.senha){
            console.log(`Parabéns, você acertou a senha, os itens que há no cofre são:\n ${this.#valor1} \n ${this.#valor2}\n R$${this.#valor3}`)
        }else{
            console.log("Senha incorreta!")
        }
    }
}

const senha1 = new Cofre()
senha1.acessar("paulo2025")