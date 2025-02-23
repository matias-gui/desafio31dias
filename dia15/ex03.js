//Simulação de fila de mercado

class Mercado{
    constructor(){
        this.fila = []
    }

    filaDoCaixaDoMercado(cliente){
        this.fila.push(cliente)
        console.log(`Caixa:\n${cliente} entrou na fila.`)
    }
    atenderCliente(){
        if(this.filaVazia()){
            return console.log (`A fila está vazia!`)
        }
        const primeiroCliente = this.fila[0]
        console.log(`Atendendo ${primeiroCliente}.\nProximo!!`)
        this.fila.shift()
    }

    filaVazia(){
        return this.fila.length === 0 
    }
}

const mercado = new Mercado()
mercado.filaDoCaixaDoMercado("Paulo")
mercado.filaDoCaixaDoMercado("Kessya")
mercado.atenderCliente()
mercado.atenderCliente()
mercado.atenderCliente()