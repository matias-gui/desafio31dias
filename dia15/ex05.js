// Fila

//Criação de uma fila para armazenar processos pendentes, que o execute na ordem de chegada

class Processos{
    constructor(){
        this.fila = []
    }

    processosPendente(processo){
        this.fila.push(processo)
        console.log(`Processo ${processo} está pendente!`)
    }

    executarProcesso(){
        if(this.processoVazio()){
            return console.log(`Não há processo pendentes!!`)
        }
        const primeiroProcesso = this.fila.shift()
        console.log(`Executando o processo pendente: ${primeiroProcesso}`)
    }

    processoVazio(){
        return this.fila.length === 0 
    }
}

const processo = new Processos()
processo.processosPendente("Enviar E-mail")
processo.processosPendente("Enviar arquivo Pdf")
processo.processosPendente("Enviar arquivo Word")
processo.processosPendente("Enviar Recisão")
processo.processosPendente("Enviar Documento para assinatura")

processo.executarProcesso()
processo.executarProcesso()
processo.executarProcesso()
