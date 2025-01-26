// Criação de uma classe Calculadora com métodos de soma, subtração, multiplicação e divisão.

class Calculadora{
    constructor(n1 , n2){
        this.n1 = n1
        this.n2= n2
    }
    calcular(){
        console.log(`A soma dos números é: ${this.n1 + this.n2}`)
        console.log(`A subtração dos números é: ${this.n1 - this.n2}`)
        console.log(`A multiplicação dos números é: ${this.n1 * this.n2}`)
        console.log(`A divisão dos números é: ${this.n1 / this.n2}`)
    }

}

const numero1 = new Calculadora(15, 5)
numero1.calcular()