class CompeticionFutbol{
    constructor (nombre,pais){
        this.nombre=nombre;
        this.pais = pais;
        this.equipos = [];
    }
    anadirEquipo(equipo){
        this.equipos.push(equipo);
    }
    eliminarEquipo(nombre){
        let posicion=this.equipos.findIndex((a)=>a.nombre==nombre);
        if (posicion!=-1){
            this.equipos.splice(posicion,1);
            return true;
        } else {
            return false;
        }
    }
    actualizarEquipo(nombreEquipo,nuevoNombre,nuevaCiudad,nuevoCampo){
        let posicion=this.equipos.findIndex((a)=>a.nombre==nombreEquipo);
        if (posicion!=-1){
            this.equipos[posicion].nombre=nuevoNombre;
            this.equipos[posicion].campo=nuevoCampo;
            this.equipos[posicion].nombre=nuevaCiudad;
            return true;
        } else {
            return false;
        }
    }
    recuperarDatosEquipo(nombre){
         return this.equipos.find((a)=>a.nombre==nombre);
        
    }
    filtrarEquipos(filtro){
        return this.equipos.filter(e=>e.nombre.includes(filtro))
    }
}