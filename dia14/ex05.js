function Pilha (){
    const pilha = []
    const op = []

    for(let str of pilha){
        if(str === "("){
            pilha.push(str)
        }else if(str === ")"){
            pilha.push(str)
        }
        if(str === "+"){
          op =  pilha.pop(str)
        }else if(str === "*"){
          op =  pilha.pop(str)
        }    
        let soma = ""
        if(op === "+"){
         soma += pilha 
         return

        } else if(op === "*"){
         soma = pilha 
         return
        }
    }
}

console.log(Pilha(3+4))
