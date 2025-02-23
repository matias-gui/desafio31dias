//pilhas

class Mensagens {
    constructor() {
        this.contatos = []
    }

    adicionarContatos(contatos) {
        this.contatos.push(contatos)
        console.log(`${contatos} adicionado`)
    }
    enviarMensagem(quantidade) {
        if (this.contatosVazio()) {
            return console.log(`A lista de contatos está vazia`)
        }
        for (let i = 0; i < quantidade; i++) {
            if (this.contatosVazio()) {
                return console.log(`Todas as mensagens foram enviadas.`)
            }
            const primeiroContato = this.contatos.shift()
            console.log(`Mensagem enviada para ${primeiroContato}`)
        }
    }

    contatosVazio() {
        return this.contatos.length === 0
    }
}

const mensagem = new Mensagens()
mensagem.adicionarContatos("Paulo - 22222")
mensagem.adicionarContatos("Pantera - 44444")
mensagem.enviarMensagem(3)
mensagem.enviarMensagem(3)