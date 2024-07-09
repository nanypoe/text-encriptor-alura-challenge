function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./assets/encriptado.png";
    } else {
        imagen.src = "./assets/buscando.png";
        alert("Debes ingresar texto para encriptar o desencriptar");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDescifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoDescifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./assets/desencriptado.png";
    } else {
        imagen.src = "./assets/buscando.png";
        alert("Debes ingresar texto para encriptar o desencriptar");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    }
}