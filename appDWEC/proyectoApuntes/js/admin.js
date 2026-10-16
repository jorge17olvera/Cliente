

let listaEstudiantes=[];
pedirDatosJSONAlServidorYEjecutar(listaEstudiantes, "./json/estudiantes.json", mostrarTotalAlumnos);

let listaProfesores=[];
pedirDatosJSONAlServidorYEjecutar(listaProfesores, "./json/profesores.json", mostrarTotalProfesores);

let listaApuntes=[];
pedirDatosJSONAlServidorYEjecutar(listaApuntes, "./json/apuntes.json", mostrarTotalProfesoresConApuntes);

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

function mostrarTotalProfesoresConApuntes(lista) {
    let divTotalProfesores=document.getElementById("totalProfesores");
    let listaProfesoresConApuntes=[];
    lista.forEach(apunte=>{
        let idProfe=apunte.idProfesor;
        if (!listaProfesoresConApuntes.includes(idProfe)) {
            listaProfesoresConApuntes.push(idProfe)
        }
    })
    let parrafo=document.createElement("p");
    parrafo.insertAdjacentText("afterbegin", `Numero profesores que han subido apuntes: ${listaProfesoresConApuntes.length}`);
    divTotalProfesores.insertAdjacentElement("afterbegin", parrafo);
}


function mostrarDivGestionEstudiantes() {
    [...document.getElementsByClassName("visible")].forEach(elemento=>elemento.className="oculto");
    document.getElementById("gestionEstudiantes").className="visible";
    
}



function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

/*

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
        }*/