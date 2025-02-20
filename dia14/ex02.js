

function pilha(){
    const pilha = [""];

    if(pilha.length === ""){
        return true
    };
     if(pilha.length === 1){
        return true; 
    }
    if(pilha[0] !== pilha[pilha.length - 1]){
        return false;
    }

    return pilha (pilha.slice(1, -1))
}

console.log(pilha())