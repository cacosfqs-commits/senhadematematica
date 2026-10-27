
const senhaCorreta = "ooruk";

const formulario = document.getElementById("login-form");
const campoSenha = document.getElementById("codigo");
const botaoMostrar = document.getElementById("toggle-password");
const mensagem = document.getElementById("mensagem");

botaoMostrar.addEventListener("click", function () {
    const senhaVisivel = campoSenha.type === "text";

    campoSenha.type = senhaVisivel ? "password" : "text";
    botaoMostrar.textContent = senhaVisivel ? "Mostrar" : "Ocultar";
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (campoSenha.value === senhaCorreta) {
        alert("Obrigado pela compra!");

        mensagem.innerHTML =
            'Acesse seu material aqui: ' +
            '<a href="https://cacosfqs-commits.github.io/matematica8ano/" target="_blank" rel="noopener noreferrer">' +
            'Clique aqui para entrar no site' +
            '</a>';

        mensagem.className = "mensagem sucesso";
    } else {
        mensagem.textContent = "Código incorreto. Tente novamente.";
        mensagem.className = "mensagem erro";
    }
});
