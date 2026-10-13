const { createElement } = require("react");

let listaEstudiantes=[];
pedirDatosJSONAlServidorYEjecutar(listaUsuarios, "./fotos/json/estudiantes.json", mostrarTotalAlumnos);

let listaProfesores=[];
pedirDatosJSONAlServidorYEjecutar(listaProfesores, "./fotos/json/estudiantes.json", mostrarTotalProfesores);

onload=()=>{
 
}

function mostrarTotalAlumnos(lista) {
    let divTotalEstudiantes=document.getElementById("totalEstudiantes");
    let parrafo=document.createElement("p");
    parrafo.insertAdjacentText("afterbegin", `Numero estudiantes: ${lista.length}`);
    divTotalEstudiantes.insertAdjacentElement("afterbegin", parrafo);

}

function mostrarTotalProfesores(lista) {
    let divTotalProfesores=document.getElementById("totalProfesores");
    let parrafo=document.createElement("p");
    parrafo.insertAdjacentText("afterbegin", `Numero profesores: ${lista.length}`);
    divTotalProfesores.insertAdjacentElement("afterbegin", parrafo);

}



function recuperarCookie(nombreCookiePedida) {
            let listaCookies = document.cookie.split(";");
            let retorno="";
            for (let cookie of listaCookies) {
                let [nombre, valor] = cookie.split("=").map(c => c.trim());
                if (nombre === nombreCookiePedida) {
                    retorno=valor;
                }
            }
            return retorno;
        }

        function comprar(idCaramelo) {
            // Recuperar carrito actual (guardaremos los IDs separados por comas)
            let contenidoCookie=recuperarCookie("carrito");
            let listaCarrito=[];
            if (contenidoCookie!="") {
                listaCarrito = JSON.parse(contenidoCookie);
            }

            listaCarrito.push({idCaramelo:idCaramelo})
            document.cookie=`carrito=${JSON.stringify(listaCarrito)}`;

            document.getElementById("contadorCarrito").innerText=listaCarrito.length;
            
            // Añadir el nuevo caramelo
            arrayCarrito.push(idCaramelo);
            
            // Guardar de nuevo en la cookie
            document.cookie = `carrito=${arrayCarrito.join(",")}; path=/`;
            
            alert("Caramelo comprado y añadido al carrito");
            actualizarContadorVisual();
        }