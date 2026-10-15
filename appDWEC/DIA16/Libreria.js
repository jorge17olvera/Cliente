class Libreria {
    constructor(nombre, direccion) {
        this.nombre=nombre || "Sin nombre";
        this.direccion=direccion||"Sin direccion";
        this.libros=[];
    }

     anadirLibro(libro){
        this.libros.push(libro);
    }

    anadirLibro2(id, nombre, idautor, editorial){
        let libro=new Libro(id, nombre, idautor, editorial);
        this.libros.push(libro);
    }

    consultarNombre(id){
        let nombreLibro=this.libros.find(libro=>libro.id==id);
        return nombreLibro ? nombreLibro.nombre: "Libro no encontrado"
    }

    eliminarLibro(id){
        let posicionlibroBuscado=this.libros.findIndex(libro=>libro.id==id);

        if (posicionlibroBuscado!=-1) {
            this.libros.splice(posicionlibroBuscado, 1);
            return true;
        }else{
            return false;
        }
    }
        
}
   
