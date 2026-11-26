import {mascaraCPF, mascaraTelefone, validarCPF, validarEmail, validarTelefone} from "./utils.js";

window.onload = function(){
    
    const formularioCadastro = document.querySelector("#form-cadastro")
    const nome = formularioCadastro.querySelector("#nome-cadastro") 
    const cpf = formularioCadastro.querySelector("#cpf")
    const email = formularioCadastro.querySelector("#email-cadastro")
    const telefone = formularioCadastro.querySelector("#telefone")
    const senha = formularioCadastro.querySelector("#senha")
    const senhaConfirmacao = formularioCadastro.querySelector("#senha-confirmacao")
    const barraForcaSenha = document.querySelector("#nivel-forca-senha")
    const botoesVisibilidade = document.querySelectorAll(".botao-visibilidade")
    let visualizarSenha = false
    botoesVisibilidade.forEach(botao => {        
        let areaSenha = botao.previousElementSibling
        let img = botao.querySelector('img')
        botao.addEventListener('click',(event)=>{
            if (!visualizarSenha) {
                img.src = "imagens/icones/olhoFechado.png"
                visualizarSenha = !visualizarSenha
                console.log(areaSenha.type)
            } else {
                img.src = "imagens/icones/olhoAberto.png"
                visualizarSenha = !visualizarSenha
                areaSenha.type
            }
        })
    });
    cpf.addEventListener('input',(event) =>{
        event.target.value = mascaraCPF(event.target.value) 
    })
    
    telefone.addEventListener('input',(event) =>{
        event.target.value = mascaraTelefone(event.target.value) 
    })

    formularioCadastro.addEventListener('input', (event) => {
        event.target.setCustomValidity("")
    })

    
    senha.addEventListener('input', (event) =>{
        
        if (event.target.value.length === 0){
            barraForcaSenha.style.visibility = "hidden"
            return
        }
        let s = event.target.value
        let forcaSenha = 0;

        forcaSenha += Math.min(s.length - 8, 8)
                
        let caracteresEspeciais = s.match(/[^a-zA-Z0-9\s]/);
        if (caracteresEspeciais) {
            forcaSenha += Math.min(caracteresEspeciais.length, 4)
        }
        
        let sequenciaNumerica = /(?:012|123|234|345|456|567|678|789)/
        if (sequenciaNumerica.test(s)){
            forcaSenha -=3
        }

        let sequenciaDeLetras = /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i;
        if (sequenciaDeLetras.test(s)){
            forcaSenha -=3
        } 
        barraForcaSenha.style.visibility = "visible"
        if (forcaSenha < 0){
            barraForcaSenha.style.color = "red"
            barraForcaSenha.style.borderTopColor = "red"
            barraForcaSenha.textContent = "força da senha fraca"
        } else if (forcaSenha <=5){
            barraForcaSenha.style.color = "yellow"
            barraForcaSenha.style.borderTopColor = "yellow"
            barraForcaSenha.textContent = "força da senha media"
        } else {
            barraForcaSenha.style.color = "green"
            barraForcaSenha.style.borderTopColor = "green"
            barraForcaSenha.textContent = "força da senha forte"
        }        
        event.target.value = event.target.value.trim();
    })
    formularioCadastro.addEventListener('submit',(event) => {
        if (nome.value.trim().split(" ")[0].length< 3){
            event.preventDefault();
            nome.setCustomValidity("O Nome deve ter no minimo 3 caracteres");
            nome.reportValidity();
            return;
        }
        if (nome.value.trim().split(" ")[1]== undefined){
            event.preventDefault();
            nome.setCustomValidity("Coloque nome e sobrenome");
            nome.reportValidity();
            return;
        }
        if (nome.value.trim().split(" ")[1].length< 3){
            event.preventDefault();
            nome.setCustomValidity("Sobrenome deve ter no minimo 3 caracteres");
            nome.reportValidity();
            return;
        }
        if (!validarCPF(cpf.value)){
            event.preventDefault();
            cpf.setCustomValidity("CPF invalido");
            cpf.reportValidity();
            return;
        }
        if (!validarEmail(email.value)){
            event.preventDefault();
            email.setCustomValidity("Email com formato invalido");
            email.reportValidity();
            return;
        }
        if (!validarTelefone(telefone.value)){
            event.preventDefault();
            telefone.setCustomValidity("Telefone invalido");
            telefone.reportValidity();
            return;
        }

        if (senha.value.length < 8){
            event.preventDefault();
            senha.setCustomValidity("A senha deve ter no minimo 8 caracteres");
            senha.reportValidity();
            return;
        }
        if (senha.value !== senhaConfirmacao.value){
            event.preventDefault();
            senhaConfirmacao.setCustomValidity("As senhas não coincidem");
            senhaConfirmacao.reportValidity();
            return;
        }
    })
}