

class Animal {

    exibirAnimal(){
        console.log(`O animal está se movendo...`)
    }
}

class Peixe extends Animal {
    constructor(){
        super()
    }

    especie(){
        console.log(`Os peixe é uma espécie de vertebrado.`)
    }
    
    curiosidade(){
        console.log(`Os peixes são classificados em dois diferentes grupos: peixes ósseos (osteíctes) e peixes cartilaginosos (condríctes). `)
    }

}

class Passaro extends Animal{
    constructor(){
        super()
    }

    curiosidade(){
        console.log(`Os passaros são os animais mais próximo dos deinonychosaurias`)
    }

    mover(){
        console.log(`Os passaros estão voando.. `)
    }
}

const animal1 = new Peixe ()
animal1.curiosidade()
animal1.especie()

const animal2 = new Passaro()
animal2.curiosidade()
animal2.mover()