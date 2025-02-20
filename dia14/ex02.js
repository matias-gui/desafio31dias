// Função para verificar se uma string é um palíndromo

function Pilha(str){

    let pilha = []

// Adicionando cada valor do parâmentro ao array pilha
    for(let char of str){
        pilha.push(char)
    }
// Percorrendo o parâmentro str, verificando se cada elemento removido do topo do array é igual  
    for(let char of str){
        if(char !== pilha.pop(str)){
            return false
        }
    }

    return true
}

console.log(Pilha("palíndromo"))