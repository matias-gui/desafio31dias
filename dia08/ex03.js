//Tabuleiro "⬜":"⬛"

let tabuleiro = []
for(let i = 0; i < 8; i++){
    tabuleiro [i] = []
    for(let j = 0; j < 8; j++){
        tabuleiro [i][j] = (i+j) % 2 == 0 ? "⬜":"⬛"
    }
}
console.log(tabuleiro)