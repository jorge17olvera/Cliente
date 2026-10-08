onload=()=>{
    document.getElementById("btnComprobarParidad").addEventListener("click", ()=>{
        let texto =document.getElementById("txtNumero").value;
        if(comprobarParidad(texto)){
            alert("Es par")
        }else{
            alert("Es impar")
        }
        
    });
}

function comprobarParidad(texto) {
    if (isNaN(texto)) {
        alert("Introduce un numero");
        return false;
    }else{
        let num = parseInt(texto);
        return ((num%2)==0);
    }
}