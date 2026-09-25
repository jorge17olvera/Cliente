var listaBocadillos=["Mixto","Tortilla de patatas", "Bacon queso", "Pollo", "Atun con tomate"];
listaBocadillos.push("Jamon");
console.log(listaBocadillos);
listaBocadillos.unshift("Vegetal");
listaBocadillos.splice(1,0,"Kebab");
console.log(listaBocadillos);

//Borrar
listaBocadillos.pop();
console.log(listaBocadillos);
listaBocadillos.shift(listaBocadillos);
console.log(listaBocadillos);

//darle la vuelta a la lista
listaBocadillos.reverse();
console.log(listaBocadillos);

//filtrar elementos de la lista, se puede hacer con find pero solo coge el primro
let listaFiltradaBocadillos=listaBocadillos.filter((a)=>a.length>10);
console.log(listaFiltradaBocadillos);

//ordenar arrays
listaBocadillos.sort((a,b)=>{
    if(a>b) return 1;
    else return -1;
} )

listaBocadillos.forEach((bocadillo)=>{
    console.log(bocadillo);
})

//arrays de objetos
var listaCafeteria=[
    {id:1,foto:"atunConTomate.jpg", nombre:"Atun con tomate", precio:3.50},
    {id:2,foto:"mixto.jpg", nombre:"Mixto", precio:4.50},
    {id:3,foto:"vegetal.jpg", nombre:"Vegetal", precio:3},
    {id:4, foto:"jamon.jpg", nombre:"Jamon", precio:5},
    {id:5, foto:"pollo.jpg" ,nombre:"Pollo", precio:1.50}
]

onload=()=>{
    rellenarSelectBocadillos(listaCafeteria);
    document.getElementById("selectBocadillos")
            .addEventListener("change", mostrarPrecioBocadillo);

    document.getElementById("botonCaro")
            .addEventListener("click", bocadilloMasCaro);

    mostrarBocadillosEnTabla(listaCafeteria);
                       
    }

    function mostrarBocadillosEnTabla(lista) {
        let tabla=document.createElement("table");
        document.body.appendChild(tabla);
        let thead=document.createElement("thead");
        let tbody=document.createElement("tbody");
        tabla.appendChild(thead);
        tabla.appendChild(tbody);

        let th=document.createElement("th");
        thead.insertAdjacentHTML("beforeend", `<th>nombre</th><th>foto</th><th>precio</th>`);


        lista.forEach((bocadillo)=>{
            let tr=document.createElement("tr");
        tbody.appendChild(tr);

        let td=document.createElement("td");
        tr.appendChild(td);
        //td.appendChild(document.createTextNode(lista[0].nombre));
        td.insertAdjacentText("beforeend", bocadillo.nombre);

        let tdFoto=document.createElement("td");
        tr.appendChild(tdFoto);
        tdFoto.insertAdjacentElement("beforeend",bocadillo.foto);
        });
        
    }

function rellenarSelectBocadillos(lista) {
    let selectBocadillos=document.getElementById("selectBocadillos");
    lista.forEach((bocadillo)=>{
        selectBocadillos.insertAdjacentHTML("beforeend", `<option>${bocadillo.nombre}</option>` )
    }
)};

function mostrarPrecioBocadillo() {
    //localizar el select
    let nombreBocadilloSeleccionado=document.getElementById("selectBocadillos").value;

    //buscar en la lista de bocadillos con ese nombre
    let bocadilloSeleccionado=listaCafeteria.find((bocadillo)=>bocadillo.nombre==nombreBocadilloSeleccionado);
    //mostrar el precio de ese bocadillo en e input
    if(bocadilloSeleccionado){
        document.getElementById("precioBocadillo").value=bocadilloSeleccionado.precio;
    }
    
}

function bocadilloMasCaro() {
    let masCaro = [...listaCafeteria].sort((a, b) => b.precio - a.precio)[0];
    alert(`El bocadillo mas caro es: ${masCaro.nombre}`);
}