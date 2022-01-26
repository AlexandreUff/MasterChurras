(function() {
    
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
        return false;
    } else if (n.value.length > 50){
        mensagemErro(n,'O campo de nome deve conter até 50 caracteres.');
        return false;
    } 
    return true;
}

function validarEmail(e) {

    //const regexEmail = /[a-zA-z0-9.]+@[a-zA-z0-9]+.?([a-z])*\.[a-z]{1,3}/g;

    if(e.value === ''){
        mensagemErro(e,'O campo de e-mail não foi preenchido.');
        return false;
    } else if (e.value.length > 320){
        mensagemErro(e,'O campo de nome deve conter até 320 caracteres.');
        return false;
    } /* else if (!regexEmail.test(e.value)){
        mensagemErro(e,'Endereço de e-mail inválido.');
        return false;
        console.log(regexEmail.test(e))
    } */
        return true
}

function confirmacaoDeEnvio(){
    const msgBG = document.createElement('div');
    msgBG.onclick = function() {
        //this.parentNode.removeChild(this);
        location.reload();
    }
    msgBG.classList.add('fundo-mensagem');

    const msgPopUp = document.createElement('div');
    msgPopUp.classList.add('pop-up-mensagem');
    msgPopUp.innerHTML = `<p class="titulo"> <strong>Mensagem de confirmação!</strong> </p>
                            <p> Parabéns! Dentro de alguns minutos você receberá 
                            o nosso e-mail de confirmação e, de cara, receberá
                            as dicas Master Churras da semana! </p>`;

    msgBG.appendChild(msgPopUp);

    const body = take('body');
    body.appendChild(msgBG);
}

function envioDeFormulario(e) {
    e.preventDefault();

    const nome = take('#meuNome');
    const email = take('#meuEmail');

    if(validarNome(nome) & validarEmail(email)) confirmacaoDeEnvio();
    /* validarEmail(email); */
}

const formulario = take('.formulario');

formulario.addEventListener('submit',envioDeFormulario);

})();

console.log(
    `Olá!

    *Tecnologias usadas:
    - HTML;
    - CSS;
    - Javascript.

    *Objetivo da página:
    - Landing Page responsiva de um formulário de envio.

    *Funcionalidades objetivas e técnicas:
    - A página tem apenas como finalidade a sua apresentação ao usuário com um formulário que apenas detecta se o mesmo foi preenchido ou se encontra-se vazio. Caso não esteja preenchido ou esteja preenchido de forma excessiva, os respectivos campos apresentarão uma mensagem de alerta para cada caso;
    - Os valores de "excesso" são arbitrários. Não há uma razão específica para esse bloqueio de excesso em específico dessa Landing Page. Estes foram baseados apenas em uma breve pesquisa. Entretanto, integram uma funcionalidade bastante comum para preenchimento de formulário que bloqueia excessos de caracteres com base em regulamentos próprios do desenvolvedor ou a critério do cliente;
    - Caso todos os campos de input estejam corretamente preenchidos, a mensagem de confirmação será exibida.
    
    `
)