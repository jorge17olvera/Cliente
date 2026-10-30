onload=()=>{
    document.getElementById("turnos").addEventListener("change", pedirCursosAlServidor);
}

function mostrarTurnos(lista) {
    let turno=document.getElementById("turnos").value;
    let listaFiltrada=lista.filter(curso=>curso.curso_horario==turno);
    console.log(listaFiltrada);
    mostrarEntrenadores(listaFiltrada);
}

function mostrarEntrenadores(lista){
    fetch("entrenadores.json")
    .then(respuesta=>respuesta.json())
    .then(entrenadores=>{
        listaEntrenadores=entrenadores;
        let cabecera=document.getElementById("entrenadores");
        cabecera.innerHTML="";
        let todos=document.createElement("input");
        todos.setAttribute("type", "radio");
        todos.setAttribute("name", "entrenadores");
        todos.setAttribute("checked", "true");
        cabecera.appendChild(todos);

        let textTodos=document.createElement("span");
        textTodos.insertAdjacentText("beforeend", "Todos");
        cabecera.appendChild(textTodos);

        lista.forEach(curso => {
            if(listaEntrenadores.find(curso.curso_cod_entrenador)){
                
            }
            
        });
        
    })
}

function pedirCursosAlServidor() {
    fetch("cursos.json")
    .then(respuesta=>respuesta.json()) //cuando reciba el contenido de disfraces lo pase a json
    .then(cursos=>{
        listaCursos=cursos;
        mostrarTurnos(listaCursos);
    }); //cuando tenga los difraces que los meta en la variable global y ejecute mostrar disfraces
}