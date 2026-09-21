onload = ()=>{
    document.getElementsByTagName("button")[1]
            .addEventListener("click", comprobarAprobado);
}

function comprobarAprobado() {
    //extraer texto de frase2
    let contenidoFrase2 = document.getElementById("frase2").value;

    //comprobar si aparece el texto aprobado
    if (contenidoFrase2.trim().toLowerCase().includes("aprobado")) {
        alert("Si aparece aprobado")
    }else{
        alert("No aparece aprobado")
    }
    
}