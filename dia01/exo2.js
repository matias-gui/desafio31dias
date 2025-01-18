let preco = 1000
const desconto = 60
console.log(`O preço do produto é: ${preco.toLocaleString('pt-BR',{style:'currency', currency:"BRL"})}, com o desconto o produto vai sair por ${(preco - desconto).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}` )