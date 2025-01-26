// Classe e Objetos
// Criação de uma classe com atributos e métodos para exerbir os detalhes de livros.

class Livro {
    constructor (titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }
    detalhes(){
        console.log(`O livro ${this.titulo}, do autor ${this.autor}, foi lançado em ${this.ano}`)
    }
}

const livro1 = new Livro("Amor as cegas", "Bejamin", 2003)
livro1.detalhes()

const livro2 = new Livro("Azul", "José do amaral", 2018)
livro2.detalhes()