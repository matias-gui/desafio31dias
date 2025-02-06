// Criação de uma classe com subclasses e atributos

class Funcionario{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }

    inforFuncionario(){
        console.log(`Funcionario: ${this.nome} \n Salario: R$${this.salario}`)
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, setor){
        super(nome, salario)
        this.setor = setor
    }

    inforFuncionario(){
        console.log(`Funcionario(a): ${this.nome}\nSalario: R$${this.salario}\nGerente do setor: ${this.setor} `)
    }
}

class Coordenador extends Gerente{
    inforFuncionario(){
        console.log(`Funcionario(a): ${this.nome} \nSalario: ${this.salario}\nCoordenador(a) do setor: ${this.setor}`)
    }
}

const funcionario1 = new Gerente("Paulo", 15000, "TI")
funcionario1.inforFuncionario()

const funcionario2 = new Coordenador("Kessya", 7000, "DP")
funcionario2.inforFuncionario()