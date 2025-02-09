

class Documento{

    exibirConteudo(){
        console.log(`Exibindo conteudo..`)
    }
}

class Pdf extends Documento{
    constructor (){
        super()
    }

    exibirConteudo(){
        console.log(`Exibindo conteudo do documento PDF..`)
    }
}

class Word extends Documento{
    constructor(){
        super()
    }

    exibirConteudo(){
        console.log(`Exibindo conteudo do documento Word...`)
    }
}

const documento = [new Pdf(), new Word()]
documento.forEach(documento => documento.exibirConteudo())