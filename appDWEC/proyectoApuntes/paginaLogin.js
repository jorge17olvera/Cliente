var listaUsuarios=[];//variable que almacenara todos los usuarios existentes
fetch("usuarios.json")
.then(respuesta=>respuesta.json())
.then(datosJSON=>listaUsuarios=datosJSON);

onload=()=>{
    document.getElementById("botonEnviar").addEventListener("click", validarAcceso);
    document.getElementById("codigo").addEventListener("focus", ocultarMensajeError);
    document.getElementById("clave").addEventListener("focus", ocultarMensajeError);
}

function ocultarMensajeError() {
    document.getElementById("error").className="oculto";
}

function validarAcceso() {
    //recuperar el valor de la caja usuario
    let codigoUsuario=document.getElementById("codigo").value;

    //recuperar el valor de la caja clave
    let claveUsuario=document.getElementById("clave").value;

    let posicion=listaUsuarios.findIndex(usuario=>usuario.codigo==codigoUsuario && usuario.clave==claveUsuario);

    if (posicion==-1) {
        document.getElementById("error").className="visible";
    } else {
        let tipo=listaUsuarios[posicion].tipo;

        switch (tipo) {
            case "estudiante":
                location.href="estudiante.html";
                break;

            case "profesor":
                location.replace("profesor.html")
                break;

            case "admin":
                location.href="admin.html";
                break;
        
            default:
                break;
        }
    }
}

