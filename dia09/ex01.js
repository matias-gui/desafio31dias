 // Essa função irá fazer uma contagem regresiva, com o uso da recursividade
 
 function contagemregresiva(n){
    if(n == 0) {
    console.log("Fim")
    return;
    }
    console.log(n)
    contagemregresiva(n - 1)
 }
 console.log(contagemregresiva(10))