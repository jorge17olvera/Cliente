var listaBocadillos=["Mixto","Tortilla de patatas", "Bacon queso", "Pollo", "Atun con tomate"];
listaBocadillos.push("Jamon");
console.log(listaBocadillos);
listaBocadillos.unshift("Vegetal");
listaBocadillos.splice(1,0,"Kebab");
console.log(listaBocadillos);

//Borrar
listaBocadillos.pop();
console.log(listaBocadillos);
listaBocadillos.shift(listaBocadillos);
console.log(listaBocadillos);

//darle la vuelta a la lista
listaBocadillos.reverse();
console.log(listaBocadillos);

//filtrar elementos de la lista, se puede hacer con find pero solo coge el primro
let listaFiltradaBocadillos=listaBocadillos.filter((a)=>a.length>10);
console.log(listaFiltradaBocadillos);

//ordenar arrays
listaBocadillos.sort((a,b)=>{
    if(a>b) return 1;
    else return -1;
} )