
let input = document.getElementById('input');
let output = document.getElementById('output');


function criptografar (string){
    const texto = input.value;
    const textoCripto = texto.toLowerCase()
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    output.value = textoCripto;
    input.value = "";
}

function descriptografar (string) {
    const textoDescripto = input.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    output.value = textoDescripto;
    input.value = "";
}

function copiar () {
    const textoCopiado = output.value;
    navigator.clipboard.writeText(textoCopiado);
    console.log(textoCopiado);
    output.value="";
}
