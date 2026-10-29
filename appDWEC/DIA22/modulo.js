import {etiquetaLista}from './componenteListaVideojuego.js';

const lista=[
    {nombre:"gta", edad:18, plataforma:"xbox"},
    {nombre:"cod", edad:18, plataforma:"pc"},
    {nombre:"fifa", edad:3, plataforma:"play"}
]
onload=()=>{
    document.getElementsByTagName("app-lista")[0].setAttribute("datos", JSON.stringify(lista));
}