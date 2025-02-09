// Polimorfismo

class Funcionario {
    calcularSalario() {
        console.log(`Calculando salário...`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(salarioBruto) {
        super()
        this.salarioBruto = salarioBruto
    }

    calcularSalario() {
        const salarioLiquido = this.salarioBruto - ((8 / 100) * this.salarioBruto)

        console.log(`O salário liquido de desenvolvedor Jr é: ${salarioLiquido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`)
    }
}

class Gerente extends Funcionario {
    constructor(salarioBruto) {
        super()
        this.salarioBruto = salarioBruto
    }

    calcularSalario() {
        const salarioLiquido = this.salarioBruto - ((8 / 100) * this.salarioBruto)

        console.log(`O salário liquido do Gerente  é: ${salarioLiquido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`)
    }
}
const salario1 = new Gerente(15000)
const salario = new Desenvolvedor(6500)

salario1.calcularSalario()
salario.calcularSalario()