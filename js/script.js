function encriptar() {
    let palabra = document.getElementById("palabra").value;
    let resultado = palabra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("mensaje").innerText = resultado;
    mostrarBotonCopiar(resultado);
}

function desencriptar() {
    let palabra = document.getElementById("palabra").value;
    let resultado = palabra
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("mensaje").innerText = resultado;
    mostrarBotonCopiar(resultado);
}

function mostrarBotonCopiar(texto) {
    let botonCopiar = document.querySelector("#rectangle .copy-button");

    if (!botonCopiar) {
        botonCopiar = document.createElement("button");
        botonCopiar.innerText = "Copiar";
        botonCopiar.classList.add("copy-button");
        botonCopiar.onclick = copiarTexto;

        let pTag = document.querySelector("#rectangle p");
        pTag.appendChild(botonCopiar);
    }

    botonCopiar.style.display = texto ? "block" : "none";
}

function copiarTexto() {
    let texto = document.getElementById("mensaje").innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}
