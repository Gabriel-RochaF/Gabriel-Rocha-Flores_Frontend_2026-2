export function validarEmail(email){
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

export function validarCPF(cpf){
    let regexCPF = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;
    let regexNumerosRepetidos = /^(\d)\1{10}$/;

    if (!regexCPF.test(cpf)){
        return false
    }

    const digitos = cpf.replace(/\D/g,"");
    console.log(digitos)
    if (regexNumerosRepetidos.test(digitos)){
        return false;
    }
    for (let t = 9; t < 11; t++){
        let soma = 0;
        for (let i = 0; i < t; i++){
            soma += Number(digitos[i]) * (t + 1 - i);
        }
        let resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11){
            resto = 0
        }
        if (resto !== Number(digitos[t])){
            return false;
        }
    }
    return true
}

export function validarTelefone(telefone){
    let regexTelefone = /^\([0-9][1-9]\)\s9[0-9]{4}-[0-9]{4}/
    if (!regexTelefone.test(telefone)){
        return false
    }
    let ddd = telefone.replace(/\((\d{2})\)/, "$1")
    const dddsInvalidos = [23,25,26,29,36,39,52,56,57,58,59,72,76,78]
    dddsInvalidos.forEach(d => {
        if(Number(ddd) === d){
            return false
        }
    });
    return true
}

export function mascaraCPF(cpf){
    let cpfFormatado = cpf.replace(/\D/g,"")
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/,"$1.$2")
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/,"$1.$2")
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{1,2})/,"$1-$2")
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/,"$1.$2")
    cpfFormatado = cpfFormatado.replace(/(-\d{2})\d+?$/,"$1")
    return cpfFormatado
}

export function mascaraTelefone(telefone){
    let telefoneFormatado = telefone.replace(/\D/g,"")
    telefoneFormatado = telefoneFormatado.replace(/(\d{2})(\d)/, "($1) $2")
    telefoneFormatado = telefoneFormatado.replace(/(\d{5})(\d)/, "$1-$2")
    telefoneFormatado = telefoneFormatado.replace(/(-\d{4})\d+?$/, "$1")
    return telefoneFormatado
}

