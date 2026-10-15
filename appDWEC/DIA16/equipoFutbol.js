class EquipoFutbol{
    constructor(nombre,ciudad,campo){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.campo = campo;
        this.puntos = 0;
    }
    cambiarCiudad(nuevaCiudad){
        this.ciudad = nuevaCiudad;
    }
}
