onload = function () {
    document.getElementById("cmdMostrarTexto")
            .addEventListener("click", mostrarTexto)

    document.getElementById("cmdMostrarTexto")
            .addEventListener("click", borrar)
}

function mostrarTexto() {
    let textoAMostrar = (document.getElementById("textoAMostrar").value);

    if (textoAMostrar.length<10) {
        document.body.insertAdjacentHTML("beforeend", `<h1>${textoAMostrar}</h1>`);
    }else{
        if (textoAMostrar.length<20) {
            document.body.insertAdjacentHTML("beforeend", `<h2>${textoAMostrar}</h2>`);
        }else{
            document.body.insertAdjacentHTML("beforeend", `<h3>${textoAMostrar}</h3>`);
        }
    }
}

function borrar(){
    document.getElementById("textoAMostrar").value="";
}