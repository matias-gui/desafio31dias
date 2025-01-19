//Irar percorrer os números no array, e mostrar sua posição até que encontre o número 10

let num = [1, 3, 4, 6, 9, 10, 13, 14, 15]
for(i in num){
    console.log(`Número:${num[i]} na posição ${i}`);
    if(num[i] == 10){
        break
    }
}