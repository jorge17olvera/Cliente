onload=()=>{
    document.getElementById("btnFactorial").addEventListener("click", ()=>{
        let numero=document.getElementById("txtFactorial").value;
        alert(`EL factorial es ${factorial(numero)}`)
    })
}


function factorial(numero) {
    if (numero==1) {
        return 1;
    } else {
        return numero*factorial(numero-1);
    }
}