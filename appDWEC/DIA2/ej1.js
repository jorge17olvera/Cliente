onload = function(){
    pintarPares();
}

function pintarPares() {
    for (let i = 2; i <= 20; i+2) {
        document.body.innerHTML+=`${i}<br>`;
    }
}