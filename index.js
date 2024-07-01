function encriptar() {
    let texto = document.getElementById ("texto");
    let tituloMensaje = document.getElementById ("titulo-mensaje");
    let parrafo = document.getElementById ("parrafo");
    let muñeco = document.getElementById ("mensaje-no-encontrado");

    let textoCifrado = texto.value    
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.value.length != 0){
    mensaje.value = textoCifrado;
    console.log(texto);
    tituloMensaje.textContent = "Texto encriptado con exito!";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
    }
    else {
     muñeco.src = "./img/muñeco.png";
     swal('Error!', 'Debes ingresar un texto', 'error');
     parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
     tituloMensaje.textContent = "Ningun mensaje encontrado";
     mensaje.value = "";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById ("parrafo");
    let muñeco = document.getElementById ("mensaje-no-encontrado");
    
    let textoCifrado = texto.value    
    .replace(/enter/gi, "i")
    .replace(/imes/gi, "e")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.value.length != 0){
        mensaje.value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito!";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
    }
    else{
     muñeco.src = "./img/muñeco.png";
     swal('Error!', 'Debes ingresar un texto', 'error');
     parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
     mensaje.value = "";
     tituloMensaje.textContent = "Ningun mensaje encontrado";
    }
}