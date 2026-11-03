import { etiquetaFicha } from "./fichaCurso.js";


onload=()=>{
    document.getElementById("turnos").addEventListener("change", pedirCursosAlServidor);
}

function mostrarTurnos(lista) {
    let turno=document.getElementById("turnos").value;
    let listaFiltrada=lista.filter(curso=>curso.curso_horario==turno);
    console.log(listaFiltrada);
    mostrarEntrenadores(listaFiltrada);
    pintarCursos(listaFiltrada);
}

function mostrarEntrenadores(lista){
    fetch("entrenadores.json")
    .then(respuesta=>respuesta.json())
    .then(entrenadores=>{
        listaEntrenadores=entrenadores;

       let entrenadoresDelTurno = entrenadores.filter(entrenador => {
                return lista.some(curso => curso.curso_cod_entrenador == entrenador.curso_cod_entrenador);
            });

        pintarFiltrosEntrenadores(entrenadoresDelTurno);
        
    })
}

function pintarFiltrosEntrenadores(lista) {
    let cabecera=document.getElementById("entrenadores");
        cabecera.innerHTML="";
        let todos=document.createElement("input");
        todos.setAttribute("type", "radio");
        todos.setAttribute("name", "entrenadores");
        todos.setAttribute("checked", "true");
        todos.setAttribute("value", "Todos")
        todos.addEventListener("change", filtrarPorEntrenador);
        cabecera.appendChild(todos);

        let textTodos=document.createElement("span");
        textTodos.textContent="Todos"
        cabecera.appendChild(textTodos);


        lista.forEach(entrenador => {
            let rb=document.createElement("input");
            rb.setAttribute("type", "radio");
            rb.setAttribute("name", "entrenadores");
            rb.setAttribute("value", entrenador.curso_cod_entrenador);
            rb.addEventListener("change", filtrarPorEntrenador)
            cabecera.appendChild(rb);
            
            let textoRadio=document.createElement("span");
            textoRadio.textContent=` ${entrenador.curso_entrenador}`;
            cabecera.appendChild(textoRadio);
        });
}

function pintarCursos(lista) {
    let div=document.getElementById("central");

    div.innerHTML="";

    lista.forEach(curso=>{
        let ficha=document.createElement("ficha-curso");

        ficha.setAttribute("baile", curso.curso_descripcion);
        ficha.setAttribute("precio", curso.curso_precio);
        ficha.setAttribute("dia", curso.curso_dia);
        ficha.setAttribute("turno", curso.curso_horario);
        ficha.setAttribute("imagen", curso.curso_imagen);

        div.appendChild(ficha);
    })
}

function filtrarPorEntrenador(evento) {
    let entrenadorSeleccionado = evento.target.value; 
    
    let turnoSeleccionado = document.getElementById("turnos").value;

    let cursosFiltrados = listaCursos.filter(curso => curso.curso_horario == turnoSeleccionado);

    if (entrenadorSeleccionado != "Todos") {
        cursosFiltrados = cursosFiltrados.filter(curso => curso.curso_cod_entrenador == entrenadorSeleccionado);
    }

    pintarCursos(cursosFiltrados);
}

function pedirCursosAlServidor() {
    fetch("cursos.json")
    .then(respuesta=>respuesta.json()) //cuando reciba el contenido de disfraces lo pase a json
    .then(cursos=>{
        listaCursos=cursos;
        mostrarTurnos(listaCursos);
    }); //cuando tenga los difraces que los meta en la variable global y ejecute mostrar disfraces
}