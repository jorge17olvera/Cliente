class Libro {
    constructor(id, nombre, idautor, editorial) {
        this.id=id || "Sin ISBN";
        this.nombre=nombre || "Sin nombre";
        this.idautor=idautor || 0;
        this.editorial=editorial || "Sin editorial";
    }
    imprimirDatos(){
        return `Libro ${this.nombre}, del autor con id ${this.idautor}, de la editorial ${this.editorial}`;
    }
}