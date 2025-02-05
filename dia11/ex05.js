// Criação de um sistema de Carrinho de Compras, com métos para adicionar, remover e listar os itens


class Carrinho {
    #itens
    constructor() {
        this.#itens = []
    }

    adicionarItem(item) {
        this.#itens.push(item)
    }

    removerItem() {
        this.#itens.pop()
    }

    listarItens() {
        if (this.#itens.length === 0) {
            console.log("Erro, o carrinho está vazio, porfavor adicione os itens!")
        } else {
            this.#itens.forEach(item =>
                console.log(item))
        }
    }

}

const compra = new Carrinho()
compra.adicionarItem("Bola")
compra.adicionarItem("Lapis")
compra.adicionarItem("Caderno")
compra.removerItem()
compra.listarItens()