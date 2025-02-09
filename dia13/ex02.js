// polimorfismo


class Transporte {
    mover(){
        console.log(`O transporte está se movendo...`)
    }
}

class Carro extends Transporte{
    constructor(){
        super()
    }

    mover(){
        console.log(`O carro está dirigindo...`)
    }
}

class Aviao extends Transporte {
    constructor(){
        super()
    }

    mover(){
        console.log(`O avião está voando...`)
    }
}

class Navio extends Transporte{
    constructor(){
        super()
    }

    mover(){
        console.log(`O navio está navegando...`)
    }
}

const transporte = [new Carro(), new Aviao(), new Navio()]
transporte.forEach(transporte => transporte.mover())
