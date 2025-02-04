
class Usuario{
    #senha

    constructor(senhaInicial){
        this.#senha = senhaInicial
    }

    alterarSenha(senhaAtual, novaSenha){
            if( this.validarSenhaAtual(senhaAtual) && this.validarSenha(novaSenha)){
                this.#senha = novaSenha
                console.log("Senha alterada com sucesso!")
            }else if(this.validarSenhaAtual(senhaAtual) === false){
                console.log("Senha atual inválida")
            }else if(this.validarSenha(novaSenha)=== false){
                console.log("A nova senha não atingiu o número de caracteres")
            }
    }
    validarSenhaAtual(senhaAtual){
        return senhaAtual === this.#senha

    }
    validarSenha(novaSenha){
        return novaSenha.length >= 8
       
    }
}

const senha = new Usuario("12345678")
senha.alterarSenha("12345678", "99790001")