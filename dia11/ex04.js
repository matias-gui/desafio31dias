

class Cofre{
    #valor1
    #valor2
    #valor3

    constructor(){
        this.#valor1 = 10000
        this.#valor2 = 200
        this.#valor3 = 3500
        this.senha = "paulo2025"
    }

    acessar(senha){
        if( senha === this.senha){
            console.log(`Parabéns, você acertou a senha, os valores que há no cofre são:\n R$${this.#valor1} \n R$${this.#valor2}\n R$${this.#valor3}`)
        }else{
            console.log("Senha incorreta!")
        }
    }
}

const senha1 = new Cofre()
senha1.acessar("paulo2025")