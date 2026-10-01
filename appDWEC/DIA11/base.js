const Operaciones={
    SUMAR:"sumar",
    RESTAR:"restar",
    MULTIPLICAR:"multiplicar",
    DIVIDIR:"dividir"
}

const MESESYEAR=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

onload=()=>{
    document.getElementsByTagName("input")[2].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.SUMAR));
    document.getElementsByTagName("input")[3].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.RESTAR));
    document.getElementsByTagName("input")[4].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.MULTIPLICAR));
    document.getElementsByTagName("input")[5].addEventListener("click", ()=>comprobarOperadoresYOperar(Operaciones.DIVIDIR));
    document.getElementById("botonMostrarMes").addEventListener("click", MostrarMesNacimiento);
    document.getElementById("botonMayorEdad").addEventListener("click", MayorEdad);
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

function esFechaValida(fechaEnTexto) {
    if (fechaEnTexto=="" || !/^\d{2}\/\d{2}\/\d{4}$/.test(fechaEnTexto)) {
        return false;
    }else{//Formato valido
        let year=fechaEnTexto.split("/")[2];
        let mes=fechaEnTexto.split("/")[1];
        let dia=fechaEnTexto.split("/")[0];
        
        let fecha=new Date(year, mes-1,dia);
        
        if (dia!=fecha.getDate() || mes!=fecha.getMonth()+1 || year!=fecha.getFullYear()) {//fecha invalida
            return false;
        }else{
            return true;
        }
    }
}

function MostrarMesNacimiento() {
    let fechaTexto=document.getElementById("fechaNacimiento").value.trim();
    if (!esFechaValida(fechaTexto)) {
        alert("Fecha no es valida")
    } else {
        alert(`El mes de nacimiento es ${MESESYEAR[fechaTexto.split("/")[1]-1]}`);
    }

}

function MayorEdad() {
    let fechaTexto=document.getElementById("fechaNacimiento").value.trim();
    if (!esFechaValida(fechaTexto)) {
        alert(("Fecha ivalida"))
    } else {
        let fecha=new Date(fechaTexto.split("/")[2], fechaTexto.split("/")[1]-1, fechaTexto.split("/")[0]);
        let fechaActual=new Date();
    
        fechaActual.setFullYear(fechaActual.getFullYear()-18)
    
        if (fechaActual>fecha) {
            alert("Eres mayor de edad");
        } else {
            alert("Eres menor de edad");
        }
        
    }

}
 