// Essa função vai percorrer uma lista, e retornará todos os items dela

function listaarquivo(diretorio){
    for(let item of diretorio){
        if(Array.isArray(item)){
            listaarquivo(item)
        }else{
            console.log(item)
        }
    }
}
let arquivo = ["Js",  "Script",["css", "style"] ] 
listaarquivo(arquivo)