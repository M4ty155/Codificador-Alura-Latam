function encriptar() {
    let texto = document.getElementById("texto");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById ("parrafo");
    let muñeco = document.getElementById ("mensaje-no-encontrado");

    let textoCifrado = texto.value    
    .replace(/a/gi, "enter")
    .replace(/a/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.value.length != 0){
    texto.value = textoCifrado;
    console.log(texto);
    tituloMensaje.textContent = "Texto encriptado con exito!";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
    }
    else {
    muñeco.src = "./img/muñeco.png";
     alert ("debes ingresar algun texto");
     parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
     tituloMensaje.textContent = "Ningun mensaje encontrado";
    }
}