// Classe Forma, com subclasses para calcular a área  do quadrado e do circulo

class Forma{
    constructor (area){
        this.area = area
    }

   calcArea(){
        console.log("Calculando area..")
   }

}

class Quadrado extends Forma{
    calcArea(){
        const area = this.area * this.area

        console.log(`A área do Quadrado é: ${area}`)
    }
}

class Circulo extends Forma{
    calcArea(){
        const area = Math.PI * (this.area*this.area)
        console.log(`A área do circulo é: ${area.toFixed(3)}`)
    }
}

const area1 = new Quadrado(2)
area1.calcArea()

const area2 = new Circulo(4)
area2.calcArea()