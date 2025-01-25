// Essa função verifica se uma palavra é palíndromo, ultilizando a recursão!

let string = "ana"
function palíndromo(string){
    if(string === ""){
        return true
    }
    if(string.length === 1){
        return true
    }
    if(string[0] !== string[string.length -1]){
        return false
    }
    return palíndromo(string.slice(1, -1))
}

if(palíndromo(string) === true){
    console.log("A palavra", string,"é PALÍNDROMO!!")
}else{
    console.log("A palavra",string,"não é PALÍNDROMO!!")
}
