textareaInput = document.getElementById("textareaInput");
botonEncriptar = document.getElementById("botonEncriptar");
botonDesencriptar = document.getElementById("botonDesencriptar");
tituloMensaje = document.getElementById("tituloMensaje");
textoMensaje = document.getElementById("textoMensaje");

let mensaje = textareaInput.value;
let mensajeEncriptado = [];

botonEncriptar.addEventListener("click", encriptar);

botonDesencriptar.addEventListener("click", obtenerTexto);

function encriptar() {
  mensaje = textareaInput.value;
  console.log(mensaje);
  encriptarTexto(mensaje);
}

function encriptarTexto(mensaje) {
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje.charAt(i);
    encriptarLetra(letra);
  }
  tituloMensaje.remove();
  textoMensaje.innerText = mensajeEncriptado.join("");
  mensajeEncriptado = [];
}

function encriptarLetra(e) {
  switch (e) {
    case "e":
      e = "enter";
      break;
    case "i":
      e = "imes";
      break;
    case "a":
      e = "ai";
      break;
    case "o":
      o = "ober";
      break;
    case "u":
      u = "ufat";
      break;
  }
  mensajeEncriptado.push(e);
}
