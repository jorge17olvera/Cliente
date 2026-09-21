onload = ()=>{
    document.getElementsByTagName("button")[2]
            .addEventListener("click", contarAprobados);
}

function contarAprobados() {
    //extraer texto
    let contenidoFrase1 = document.getElementById("frase1").value;

    //contar numero de veces que aparece aprobado
    let contador=0;

    let posicion=0;
    while ((posicion=contenidoFrase1.indexOf("aprobado", posicion))!=-1) {
        contador++;
        posicion+=8;
    }
    alert(`Numero de veces que aparece ${contador}`);

}