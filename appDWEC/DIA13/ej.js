onload=()=>{
    document.getElementById("comprobar1").addEventListener("click",()=> comprobar1());
    document.getElementById("comprobar2").addEventListener("click", comprobar2);
    function comprobar1() {
        alert("comprobar1 dentro")
    }
}

function comprobar1() {
    alert("comprobar1 fuera")
}

function comprobar2() {
    alert("comprobar2")
}

function comprobar2() {
    alert("comprobar2 segunda")
}