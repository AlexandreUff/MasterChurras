function take(query) {
    return document.querySelector(query);
}

function mensagemErro(elemento,mensagem) {
    const campoMensagem = document.createElement('div');
    campoMensagem.classList.add('mensagemErro');
    campoMensagem.innerHTML = mensagem;
    elemento.parentNode.after(campoMensagem);
}

function validarNome(n){
    if(n.value === ''){
        console.log('Tá vazio isso ae!');
        n.classList.add('input-invalido');

        mensagemErro(n,'O campo de nome não foi preenchido corretamente.');
    } else {
        console.log('Agora sim');
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