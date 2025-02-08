

class Animal {
    constructor(nome) {
        this.nome = nome
    }
    inforAnimal() {
        console.log(`O ${this.nome} está fazendo um som.`)
    }

}

class Cachorro extends Animal {
    constructor(nome, raca, cor) {
        super(nome)
        this.raca = raca
        this.cor = cor
    }

    inforAnimal() {
        console.log(` Cachorro\n Nome: ${this.nome}\n Raça: ${this.raca}\n Cor: ${this.cor} `)
    }

    somAnimal() {
        console.log(` ${this.nome} está Latindo..`)
    }
    comer() {
        console.log(` ${this.nome} está comendo.`)
    }
}

class Gato extends Animal {
    constructor(nome, raca, cor) {
        super(nome)
        this.raca = raca
        this.cor = cor
    }

    inforAnimal() {
        console.log(` Gato\n Nome: ${this.nome}\n Raça: ${this.raca}\n Cor: ${this.cor}`)
    }

    somAnimal() {
        console.log(` ${this.nome} está miando...`)
    }

    dormir() {
        console.log(` O ${this.nome} está dormindo...`)
    }

    fome() {
        console.log(` ${this.nome} está com fome.`)
    }
}

const animal1 = new Cachorro("Scoot", "Dogo Argentino", "Branca")
animal1.inforAnimal()
animal1.comer()

const animal2 = new Gato("Pantera", "Bombaim", "Preto")
animal2.inforAnimal()
animal2.dormir()