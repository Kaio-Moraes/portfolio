/*libera a movimentação em "X" icone de menu.*/
let menu = document.querySelector(".icone-menu");
let navegaçao = document.querySelector(".navegacao");

menu.onclick = () => {
    navegaçao.classList.toggle ("menu-aberto")
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navegaçao.classList.remove ("menu-aberto")
    menu.classList.remove("move");
}
/*email JS*/
function validaçao() {
    let nome = document.querySelector(".nome");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".mensagem");
    let EnviarBtn = document.querySelector(".enviar-btn");

    EnviarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (nome.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendemail(nome.value, email.value, msg.value);
            success();
        }
    });
}
validaçao();

function sendemail(nome, email, msg) {
    emailjs.send("service_trg1v9i", "template_nned3l9", {
        to_name: nome,
        from_name: email,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Erro!",
        text: "os campos não podem estar vazios!",
        icon: "error",
        button: "Fechar!",
    });
}

function success() {
    swal({
        title: "Email Envaido com Sucesso!",
        text: "Responderei o mais breve possível!",
        icon: "success",
    });
}
/*Mudança de fundo do cabeçalho na rolagem*/
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

/*Rolagem cima*/
let rolagemCima = document.querySelector(".rolagemcima");

window.addEventListener("scroll", () => {
    rolagemCima.classList.toggle("scroll-active", window.scrollY >= 400);
});

/*Efeito Digitador*/
var digitador = new Typed (".digitador", {
    strings: ["Full Stack."],
    typedSpeed: 200,
    backSpeed: 200,
    loop: true
})