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
            //As únicas retrições ao nome são apenas essas mesmas.
    if(n.value === ''){
        mensagemErro(n,'O campo de nome não foi preenchido.');
    } else if (n.value.length > 50){
        mensagemErro(n,'O campo de nome deve conter até 50 caracteres.');
    } 
}

function validarEmail(e) {

    const regexEmail = /[a-zA-z0-9.]+@[a-zA-z0-9]+.?([a-z])*\.[a-z]{1,3}/g;

    if(e.value === ''){
        mensagemErro(e,'O campo de e-mail não foi preenchido.');
    } else if (e.value.length > 100){
        mensagemErro(e,'O campo de nome deve conter até 100 caracteres.');
    } else if (!regexEmail.test(e.value)){
        mensagemErro(e,'Endereço de e-mail inválido.');
        console.log(regexEmail.test(e))
    }
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