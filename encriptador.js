var cifrar = document.getElementById("cifrar");
var descifrar = document.getElementById("descifrar");

//CIFRADO Y DESCIFRADO
function cifrarTexto() {
  //accedo al DOM y obtengo el elemento por ID
  //lo convierto en array a traves del metodo split
  var textoCifrado = cifrar.value.split("");

  //usando el for lo recorro y cambio la vocales segun la referencia puesta
  for (var i = 0; i < textoCifrado.length; i++) {
    switch (textoCifrado[i]) {
      case "e":
        textoCifrado[i] = "enter";
        break;
      case "i":
        textoCifrado[i] = "imes";
        break;
      case "a":
        textoCifrado[i] = "ai";
        break;
      case "o":
        textoCifrado[i] = "ober";
        break;
      case "u":
        textoCifrado[i] = "ufat";
        break;
    }
  }
  //en otra variable traigo el campo de texto por id al igual que el primero
  //y por ultimo muestro el texto cifrado tranformandolo de array a string en el input

  descifrar.value = textoCifrado.toString().replace(/,/g, "");
  cifrar.value = "";
}
function descifrarTexto() {
  //para hacer la inversa y descifrar obtengo el texto y uso los metodos
  //includes para saber si se encuentra la cadena en el texto y desc
  //y por ultimo uso el metodo replace para remplazar ese pedazo de cadena por su respectiva letra
  let texto = descifrar.value;
  if (texto.includes("enter")) {
    texto = texto.replaceAll("enter", "e");
  }
  if (texto.includes("imes")) {
    texto = texto.replaceAll("imes", "i");
  }
  if (texto.includes("ai")) {
    texto = texto.replaceAll("ai", "a");
  }
  if (texto.includes("ober")) {
    texto = texto.replaceAll("ober", "o");
  }
  if (texto.includes("ufat")) {
    texto = texto.replaceAll("ufat", "u");
  }

  //por ultimo le doy el valor del texto al primer input
  cifrar.value = texto;
  descifrar.value = "";
}

function vaciar() {
  descifrar.value = "";
  cifrar.value = "";
}
//funcion para copiar texto
function copiar() {
  var texto = cifrar.value;
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", texto);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
}
