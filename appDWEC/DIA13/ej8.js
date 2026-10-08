onload=()=>{
    document.getElementById("btnPalindromo").addEventListener("click", ()=>{
        let texto=document.getElementById("txtPalindromo").value;
        if (comprobarPalindromo(texto)) {
            alert("el texto es un palindromo")
        } else {
            alert("el texto NO es un palindromo")
        }
    })
}

function comprobarPalindromo(texto){
    texto=texto.toLowerCase();
    texto=texto.trim().replaceAll(" ", "");

    let textoAlReves=texto.split("").reverse().join("");
    return texto==textoAlReves;
    
}
