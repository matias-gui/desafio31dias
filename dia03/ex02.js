let idade = 15
if((idade >= 16 && idade < 18) || idade > 65 ){
    console.log(`Você tem ${idade} anos, seu voto é Opcional`)
}else if(idade >= 18 && idade < 65 ){
    console.log(`Você tem ${idade} anos, seu voto é Obrigatorio`)
}else{
    console.log(`Você tem ${idade} anos, não pode votar`)
}