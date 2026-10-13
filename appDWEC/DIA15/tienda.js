let listaDisfraces=[]; //variable global para guardar los disfraces

function pedirDisfracesAlServidor() {
    fetch("disfraces.json")
    .then(respuesta=>respuesta.json()) //cuando reciba el contenido de disfraces lo pase a json
    .then(disfraces=>{
        listaDisfraces=disfraces
        mostrarDisfraces(listaDisfraces);
    }); //cuando tenga los difraces que los meta en la variable global y ejecute mostrar disfraces
}

onload=()=>{
    pedirDisfracesAlServidor();

    if (sessionStorage.getItem("almacen")) {
        let carrito = JSON.parse(sessionStorage.getItem("almacen"));
        actualizarContadorVisual(carrito); 

    }

    let contador = document.getElementById("contadorCarrito");

    contador.addEventListener("click", () => {
        let carrito = [];
        if (sessionStorage.getItem("almacen")) {
            carrito = JSON.parse(sessionStorage.getItem("almacen"));
        }
        mostrarCarrito(carrito);
    });
    
}

function mostrarDisfraces() {
    
    listaDisfraces.forEach(disfraz=>{
    let divDisfraz = document.createElement("div");
    document.getElementById("central").insertAdjacentElement("afterbegin", divDisfraz);
    let fotoDisfraz=document.createElement("img");
    fotoDisfraz.src=disfraz.foto;
    divDisfraz.insertAdjacentElement("beforeend", fotoDisfraz);

    let descDisfraz=document.createElement("p");
    descDisfraz.textContent=disfraz.descripcion;
    divDisfraz.insertAdjacentElement("beforeend", descDisfraz);

    let precioDisfraz=document.createElement("p");
    precioDisfraz.textContent=disfraz.precio;
    divDisfraz.insertAdjacentElement("beforeend", precioDisfraz);

    let botonCompra=document.createElement("button");
    botonCompra.addEventListener("click", () => añadirAlCarrito(disfraz));
    botonCompra.type="button"; botonCompra.textContent="Añadir al carrito";
    divDisfraz.insertAdjacentElement("beforeend", botonCompra);

    })
}

function añadirAlCarrito(disfraz) {
    let carrito=[];
    if (sessionStorage.getItem("almacen")) {
        carrito=JSON.parse(sessionStorage.getItem("almacen"));
    }

    carrito.push(disfraz);

    sessionStorage.setItem("almacen", JSON.stringify(carrito));
    actualizarContadorVisual(carrito);


}

function actualizarContadorVisual(listaCarrito) {
    let contador=document.getElementById("contadorCarrito");

    contador.textContent=`CARRITO: ${listaCarrito.length}`;
}


function mostrarCarrito(lista) {
    // 1. Buscamos si ya existe el contenedor de la lista en el HTML
    let contenedorLista = document.getElementById("listaDesplegable");
    
    // Si no existe, lo creamos y lo colocamos justo debajo del contador
    if (!contenedorLista) {
        contenedorLista = document.createElement("div");
        contenedorLista.id = "listaDesplegable";
        document.getElementById("contadorCarrito").insertAdjacentElement("beforebegin", contenedorLista);
    }

    // 2. Vaciamos el contenedor por si ya tenía cosas de antes (para que no se dupliquen al hacer varios clics)
    contenedorLista.innerHTML = "<h3>Tu cesta:</h3>";

    // 3. Creamos una lista <ul>
    let ul = document.createElement("ul");

    // 4. Recorremos el array y por cada disfraz creamos un <li>
    lista.forEach(disfraz => {
        let li = document.createElement("li");
        // OJO: Hay que acceder a las propiedades (ej: disfraz.nombre), si pones solo 'disfraz' saldrá [object Object]
        li.textContent = `${disfraz.nombre} - ${disfraz.precio}€`;
        ul.appendChild(li);
    });

    // 5. Metemos la lista <ul> dentro del contenedor
    contenedorLista.appendChild(ul);
}

