class LibroElectronico extends Libro {
    constructor(id, nombre, idautor, editorial, plataforma) {
        super(id, nombre, idautor, editorial);
        this.plataforma=plataforma;
    }
    
}