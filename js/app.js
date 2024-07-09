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
        alert("Debes ingresar texto para encriptar");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    }
}