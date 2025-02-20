// Simulção de um botão de desfazer

class Botao{
    constructor (){
        this.acao = []
    }

    prosseguir(tarefa){
        this.acao.push(tarefa);
        console.log(`A tarefa ${tarefa} foi adicionada`);
    }

    desfazer(){
        if(this.acao.length === 0){
            console.log("Nenhuma ação para ser feita")
            return;
        }
        let ultacao = this.acao.pop()
        console.log(`A tarefa ${ultacao} foi apagada`);
        
    }

}

const acao1 = new Botao()
acao1.prosseguir("Nadar")
acao1.prosseguir("Correr")
acao1.prosseguir("Estudar")

acao1.desfazer()