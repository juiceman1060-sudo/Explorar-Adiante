// BOTÃO DE MENSAGEM

const botaoMensagem =
document.getElementById("mensagem");

if (botaoMensagem) {

    botaoMensagem.addEventListener("click", function () {

        alert(
            "Obrigado por visitar nosso blog!"
        );

    });

}


// MOSTRAR / OCULTAR TEXTO

const botaoMostrar =
document.getElementById("mostrar");

if (botaoMostrar) {

    botaoMostrar.addEventListener("click", function () {

        let texto =
        document.getElementById("texto");

        if (texto.style.display === "none") {

            texto.style.display = "block";

        } else {

            texto.style.display = "none";

        }

    });

}


// VALIDAÇÃO DO FORMULÁRIO

const formulario =
document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        let nome =
        document.getElementById("nome").value;

        let email =
        document.getElementById("email").value;

        let mensagem =
        document.getElementById("mensagemTexto").value;

        if (
            nome === "" ||
            email === "" ||
            mensagem === ""
        ) {

            alert(
                "Preencha todos os campos."
            );

            event.preventDefault();

        }

        else {

            alert(
                "Mensagem enviada com sucesso!"
            );

        }

    });

}