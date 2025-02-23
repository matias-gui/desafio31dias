   // Fila

//Atendimento de clientes em um restaurante
class Restaurante {
    constructor() {
        this.clientes = []
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente)
        console.log(`${cliente} entrou na fila`)
    }
    atenderCliente() {
        if (this.filaVazia()) {
            return console.log(`A fila está vazia!`)
        }
        let primeiroCliente = this.clientes[0]
        console.log(`${primeiroCliente} está fazendo seu pedido.\n${primeiroCliente} finalizou seu pedido!`)
        this.clientes.shift()
    }

    filaVazia() {
        return this.clientes.length === 0;
    }
}

const cliente = new Restaurante()
cliente.adicionarCliente("Paulo")
cliente.adicionarCliente("Kessya")
cliente.adicionarCliente("Pantera")
cliente.atenderCliente()
cliente.atenderCliente()
