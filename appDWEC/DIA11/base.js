const Operaciones={
    SUMAR:"sumar",
    RESTAR:"restar",
    MULTIPLICAR:"multiplicar",
    DIVIDIR:"dividir"
}

onload=()=>{
    document.getElementsByTagName("input")[2].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.SUMAR));
    document.getElementsByTagName("input")[3].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.RESTAR));
    document.getElementsByTagName("input")[4].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.MULTIPLICAR));
    document.getElementsByTagName("input")[5].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.DIVIDIR));
    document.getElementById("botonMostrarMes").addEventListener("click", MostrarMesNacimiento);
}

function comprobarOperadoresYOperar(tipoOperacion) {
    let operador1=document.getElementById("operador1").value.trim();
    let operador2=document.getElementById("operador2").value.trim();
    let error=false;

    if (isNaN(operador1) || operador1=="") {
        alert("El operador 1 deben ser numeros");
        error=true;
    }
    if (isNaN(operador2) || operador2=="") {
        alert("El operador 2 deben ser numeros");
        error=true;
    }
    if (!error) {
        let cajaResultado=document.getElementById("resultado");
        switch (tipoOperacion) {
            case Operaciones.SUMAR:
                cajaResultado.value=parseFloat(operador1)+parseFloat(operador2);
                break;
            case Operaciones.RESTAR:
                cajaResultado.value=parseFloat(operador1)-parseFloat(operador2);
                break;

            case Operaciones.MULTIPLICAR:
                cajaResultado.value=parseFloat(operador1)*parseFloat(operador2);
                break;

            case Operaciones.DIVIDIR:
                cajaResultado.value=parseFloat(operador1)/parseFloat(operador2);
                break;
            default:
                break;
        }
    }
}

function MostrarMesNacimiento() {
    let fechaTexto=document.getElementById("fechaNacimiento").value.trim();
    if (fechaTexto=="" || /^\d{2}\/\d{2}\/\d{4}$/.test(fechaTexto)) {
        alert("Fecha de nacimiento vacia")
    }else{//Fecha valida
        
    }
    

}