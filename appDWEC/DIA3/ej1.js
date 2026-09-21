onload =  ()=> {
    document.getElementsByTagName("button")[0]
            .addEventListener("click", comprobarMostrarMensaje);
}

function comprobarMostrarMensaje() {
    //recuperar lo que hay en frase1
    let contenidoFrase1 = document.getElementById("frase1").value;

    //si el tamaño es mayor que 20 mostrar mensaje
    if (contenidoFrase1.trim().length>20) {
        alert("Texto demasiado grande");    
    }

    
}