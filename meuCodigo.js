function take(query) {
    return document.querySelector(query);
}

function mensagemErro(elemento,mensagem) {
        let campoMensagem;
        elemento.classList.add('input-invalido');

        if(elemento.id === 'meuNome'){
            campoMensagem = take('#erroNome');
        } else if(elemento.id === 'meuEmail'){
            campoMensagem = take('#erroEmail');
        }

        campoMensagem.innerHTML = '🚫 '+mensagem;
        elemento.parentNode.after(campoMensagem);
}

function validarNome(n){

    //fazer um Switch
    if(n.value === ''){
        mensagemErro(n,'O campo de nome não foi preenchido.');
    } else if (n.value.length > 50){
        mensagemErro(n,'O campo de nome deve conter até 50 caracteres.');
    }
}

function validarEmail(e) {
}

function envioDeFormulario(e) {
    e.preventDefault();

    const nome = take('#meuNome');
    const email = take('#meuEmail');

    validarNome(nome);
    validarEmail(email);
}

const formulario = take('.formulario');

formulario.addEventListener('submit',envioDeFormulario);