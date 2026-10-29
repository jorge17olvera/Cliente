class Lista extends HTMLElement{
    constructor() {
        super();
    }
    get template(){//plantilla
        let listaJuegos=JSON.parse(this.getAttribute("datos"));
        let codigoHTML=`
        <style>
        p{
            color:red
        }
        </style>
        `
        listaJuegos.forEach(element => {
            codigoHTML+=`
        <p>${element.nombre}</p>`
    })
        return codigoHTML
    }
    connectedCallback(){
        this.innerHTML=this.template;
    }
    static get observedAttributes(){//que observa para hacer algo
        return ["datos"]
    }
    attributeChangedCallback(name, oldValue, newValue){//que hace cuando cambie lo observado
        this.innerHTML=this.template;
    }
}
export const etiquetaLista=window.customElements.define("app-lista", Lista);