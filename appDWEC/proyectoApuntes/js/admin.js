const { createElement } = require("react");

let listaEstudiantes=[];
pedirDatosJSONAlServidorYEjecutar(listaUsuarios, "./json/estudiantes.json", mostrarTotalAlumnos);

let listaProfesores=[];
pedirDatosJSONAlServidorYEjecutar(listaProfesores, "./json/estudiantes.json", mostrarTotalProfesores);

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