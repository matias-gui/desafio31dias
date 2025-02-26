

class Empresa{
    constructor(cargos){
        this.cargos = cargos
        this.subcargos = []
    }

    adicionarSubcargos(subcargo){
        this.subcargos.push(subcargo)

    }

}


const cargoRaiz = new Empresa("CEO")
const subcargo1 = new Empresa("Diretores")
const subcargo2 = new Empresa("Gerentes")
const subcargo3 = new Empresa("Analista")

cargoRaiz.adicionarSubcargos(subcargo1)
subcargo1.adicionarSubcargos(subcargo2)
subcargo2.adicionarSubcargos(subcargo3)
 
console.log(cargoRaiz)

    
