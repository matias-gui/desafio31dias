
class Usuario{
    #senha

    constructor(senhaInicial){
        this.#senha = senhaInicial
    }

    alterarSenha(senhaAtual, novaSenha){
            if( this.validarSenhaAtual(senhaAtual) && this.validarSenha(novaSenha)){
                this.#senha = novaSenha
                console.log("Senha alterada com sucesso!")
            }else{
            console.log("Senha atual inválida, ou nova senha não atingiu o número de caracteres")
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
senha.alterarSenha("12345678", "99788779")