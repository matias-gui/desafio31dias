// Criação de uma classe, com métodos de Ligar Desligar a tv, escondendo seu estado interno

class ControleRemoto {
    #estado 

    constructor (){
        this.#estado = "desligada"
    }

    ligarTv(){
       this.#estado = "ligada"
       console.log("A tv está ligada")
    }

    desligarTv(){
       this.#estado = "desligada"
       console.log("A tv está desligada")
    }

    estadoAtual(){
        return console.log(`A tv está ${this.#estado}`)
    }


}

const tv = new ControleRemoto()
tv.ligarTv()