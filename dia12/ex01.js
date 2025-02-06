// Inicio dos estudos sobre Herança

class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }
    ligarVeiculo() {
        console.log(`${this.marca} - ${this.modelo} está ligado`)
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cor, portas) {
        super(marca, modelo)
        this.cor = cor
        this.portas = portas
    }
    corVeiculo() {
        console.log(`A cor do ${this.modelo} é ${this.cor}`)
    }

    portaVeiculo() {
        console.log(`Tem ${this.portas} portas`)
    }

    descriçaoCompleta() {
        this.ligarVeiculo()
        this.corVeiculo()
        this.portaVeiculo()
    }
}

class Moto extends Veiculo {

    empinando() {
        console.log(`Empinando sem placa e capacete!!`)
    }
    pneuFurou() {
        console.log(`O pneu da ${this.modelo} furou!!`)
    }

    descriçaoCompletaMoto() {
        this.ligarVeiculo()
        this.empinando()
        this.pneuFurou()
    }
}
const carro1 = new Carro("Honda", "Civic", "Vermelho", 4)
carro1.descriçaoCompleta()

const moto1 = new Moto("Honda", "Start 160")
moto1.descriçaoCompletaMoto()