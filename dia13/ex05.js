// Polimorfismo

class Forma{

    calcArea(){
        console.log(`Calculando as áreas:`)
    }

}

class Quadrado extends Forma{
    constructor(lado){
        super("Quadrado")
        this.lado = lado
    }

    calcArea(){
        const area = this.lado * this.lado

        console.log(`A área do Quadrado é: ${area}`)
    }
}

class Retangulo extends Forma{
    constructor(comprimento, largura){
        super("Retangulo")
        this.comprimento = comprimento
        this.largura = largura
    }

    calcArea(){
        const area = this.comprimento * this.largura

        console.log(`A área do Retângulo é: ${area}`)
    }
}

class Triangulo extends Forma{
    constructor(base, altura){
        super("Triângulo")
        this.base = base
        this.altura = altura
    }

    calcArea(){
        const area = (this.base * this.altura) / 2

        console.log(`A área do Triângulo é: ${area}`)
    }
}

const area = [new Forma(), new Quadrado(5), new Retangulo(23, 10), new Triangulo(20, 5)]
area.forEach(area => area.calcArea())
