
/* Requisito para Encriptacion de Texto: Las "llaves" de 
   encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/*******************Declaración de variables**********************************/

const btnEncriptar = document.getElementById('btnEncriptar');
btnEncriptar.onclick = encriptarTexto;

const btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.onclick = desencriptarTexto;

const btnCopiar = document.getElementById('copiarPortapapeles');
btnCopiar.onclick = copiarPortapapeles;

/*****************Función para encriptar texto************************************/

function encriptarTexto(e) {
    e.preventDefault();
    let inputTexto = document.getElementById("textoEntrada").value;
    
    if (!validarEntrada(inputTexto)) {
        alert("Por favor, ingresa solo letras minúsculas sin caracteres especiales.");
        return;
    }
    var textoEncriptado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("textoResultado").textContent = textoEncriptado;
}

/*************Función para desencriptar texto************************************/
function desencriptarTexto(e) {
    e.preventDefault();
    let inputTexto = document.getElementById("textoEntrada").value;
    
    if (!validarEntrada(inputTexto)) {
        alert("Por favor, ingresa solo letras minúsculas sin caracteres especiales.");
        return;
    }
    
    let textoDesencriptado = inputTexto
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/enter/g, 'e')
        .replace(/ufat/g, 'u')
        .replace(/imes/g, 'i');

        document.getElementById("textoResultado").textContent = textoDesencriptado;    
}

/*funcion para validación: requisito del proyecto, no se aceptarán mayúsculas ni caracteres especiales*/

function validarEntrada(texto) {
    return /^[a-z\s]+$/.test(texto);
}

/*****************Borrar texto del area de texto***********************************/
function borrarEntrada() {
    document.getElementById("textoEntrada").value = "";
}

/*Extra:funcion copiar valores del campo de presentación de mensajes al portapapeles*/
function copiarPortapapeles(e) {
    e.preventDefault();
    let textoResultado = document.getElementById("textoResultado").textContent;
    if (!textoResultado) {
        alert("Ningun mensaje fue encontrado.Por favor, ingresa un texto para encriptar o desencriptar.");
        return;
    }
    navigator.clipboard.writeText(textoResultado);
    alert("Texto copiado al portapapeles");
    borrarEntrada();
}