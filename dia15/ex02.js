// Criação de uma fila que armazena musicas em uma playlist, e a remove quando for tocada

class Musicas {
    constructor() {
        this.musicas = []
    }

    adicionarNaPlaylist(musica) {
        this.musicas.push(musica)
        console.log(`${musica} foi adicionada na playlist`)
    }

    tocarPlaylist() {
        if (this.playlistVazia()) {
            return console.log(`A playlist está vazia !!`)
        }
        const primeiraMusica = this.musicas[0]
        console.log(`Tocando musica: ${primeiraMusica}`)
        this.musicas.shift()
    }

    playlistVazia() {
        return this.musicas.length === 0
    }
}

const playlist = new Musicas()
playlist.adicionarNaPlaylist("Bruno e Marrone, 'Dormir na Praça'")
playlist.adicionarNaPlaylist("Eminem, 'Without Me'")
playlist.adicionarNaPlaylist("Tupac, 'Changes'")
playlist.adicionarNaPlaylist("Fellipe Ret, 'Melhor Vibe'")
playlist.adicionarNaPlaylist("Fellipe Ret, 'Amor Livre'")

playlist.tocarPlaylist()
playlist.tocarPlaylist()