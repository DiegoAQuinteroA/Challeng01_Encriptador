//DOM
let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let infoOculto = document.getElementById("oculto");
let btnCopiar = document.getElementById("copiar");
let textSalida = document.querySelector(".texto-salida");
let imgSalida = document.getElementById("img-salida");

function encriptar (){
    let texto = document.querySelector("#entrada").value;
    let textoCifrado = texto.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.querySelector(".texto-salida").value = textoCifrado;
    document.querySelector("#entrada").value;

    infoOculto.style.display = 'none'; //ocultar la información del recuadro de salida
    btnCopiar.style.display = 'block'; //mostrar boton copiar
    textSalida.style.display = 'block';
    imgSalida.style.display = 'none';
}
btnEncriptar.onclick = encriptar;

function desencriptar (){ 
    let texto = document.querySelector("#entrada").value; 
    let textoCifrado = texto.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u"); 
    document.querySelector(".texto-salida").value = textoCifrado;
    document.querySelector("#entrada").value;

    infoOculto.style.display = 'none'; //ocultar la información del recuadro de salida
    btnCopiar.style.display = 'block'; //mostrar boton copiar
    textSalida.style.display = 'block';
    imgSalida.style.display = 'none';
}
btnDesencriptar.onclick = desencriptar;

//copiar
btnCopiar.addEventListener("click", (event) => {
    event.preventDefault();
    textSalida.select();
    document.execCommand("copy");
});

// ocultar boton copiar 
btnCopiar.style.display = 'none';
textSalida.style.display = 'none';


