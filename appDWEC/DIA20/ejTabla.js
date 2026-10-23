
class Tabla extends HTMLElement {
    constructor() {
        super();
        let shadowRoot=this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML=this.template;
    }
    

    get template(){
        let datosTabla=JSON.parse(this.getAttribute("datos"));
        datosTabla.forEach(element => {
            let tabla=document.getElementById("tabla");
        let tr=document.createElement("tr");
        tabla.append(tr);
        let tdId=document.createElement("td");
        let tdNombre=document.createElement("td");
        tdId.insertAdjacentText("beforeend", element.id);
        tdNombre.insertAdjacentText("beforeend", element.nombre);
        tr.append(tdId);
        tr.append(tdNombre);
        });

       /* let contenidoHtml="<table><tbody>"
        datosTabla.forEach(dato=>{
            contenidoHtml+=`<tr>
            <td>${dato.id}</td>
            <td>${dato.nombre}</td>
        </tr>`
        })
        
        contenidoHtml+="</tbody></table>"*/

        return "";
        
    }
}
export const etiquetaTabla=window.customElements.define("app-tabla", Tabla);

/*class Colores {
    constructor() {
        super();
        let shadowRoot=this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML=this.template;
    }

    get template(){
        let colores=this.getAttribute("colores").split(";");
        colores.forEach(color=>{
            let op=document.createElement("option");
            op.insertAdjacentText("beforeend", color);
        })
        return"";
        
    }
}
export const etiquetaColores=window.customElements.define("app-select", Colores);*/