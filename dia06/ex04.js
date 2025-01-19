// O código vai remover o primero elemento do array ultilizando o "shift", e depois mostrará os elementos na tela

let tarefas = ["Estudar", "Treinar", "Correr", "Arrumar a casa"]
tarefas.shift()
console.log("As tarefas de hoje será:")
for(let i=0; i < tarefas.length; i++){
    console.log(tarefas[i])
}