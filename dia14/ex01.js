
// Pilhas


class Pilha {
    constructor() {
        this.item = []
    }

    adicionar(itens) {
        this.item.push(itens)
    }

    remover() {
        if (this.isEmpty()) {
            console.log(`A Pilha está vazia!!`)
        } else {
            this.item.pop()
        }
    }

    visualizarTopo() {
        if (this.isEmpty()) {
            console.log(`A Pilha está vazia!!`)
        } else {
            console.log(`No topo da pilha está o : ${this.peek()}`)
        }
    }

    peek() {
        return this.item[this.item.length - 1]
    }


    isEmpty() {
        return this.item.length === 0
    }
}


const pilha = new Pilha()

pilha.adicionar(45)
pilha.adicionar(19)
pilha.adicionar(4)
pilha.visualizarTopo()