let textareaInput = document.getElementById("textareaInput");
botonEncriptar = document.getElementById("botonEncriptar");
botonDesencriptar = document.getElementById("botonDesencriptar");

let mensaje = textareaInput.value;

botonEncriptar.addEventListener("click", obtenerTexto);

botonDesencriptar.addEventListener("click", obtenerTexto);

function obtenerTexto() {
  console.log(textareaInput.value);
}
