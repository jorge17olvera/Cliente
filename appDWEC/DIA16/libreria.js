onload=()=>{
    document.getElementById("anadir").addEventListener("click", anadirLibroTabla);
}

function anadirLibroTabla() {
    let id=document.getElementById("txtidLibro").value;
    let nombre=document.getElementById("txtNombre").value;
    let idAutor=document.getElementById("txtAutor").value;
    let editorial=document.getElementById("txtEditorial").value;

    
    Libreria.anadirLibro2(id, nombre, idAutor, editorial);

    //validar campos
    let contadorErrores=0;
    if (contadorErrores==0) {
        if (Libreria.anadirLibro2(id, nombre, idAutor, editorial)) {
            alert("Libro guardado")
            mostrarTablaLibros(Libreria.libros);
        } else {
            alert("EL librono se ha podido guardar")
        }
    }else{
        alert("Faltan campos");
    }
}

function mostrarTablaLibros(){
    let libros=Libreria.libros;
    alert(libros);
    
}