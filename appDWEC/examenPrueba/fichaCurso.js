class fichaCurso extends HTMLElement {
    constructor() {
        super()
    }

    get template(){
        let baile = this.getAttribute("baile");
        let precio = this.getAttribute("precio");
        let dia = this.getAttribute("dia");
        let turno = this.getAttribute("turno");
        let imagen = this.getAttribute("imagen");

        this.innerHTML = `
            <div style="border: 1px solid black; padding: 10px; margin: 5px; display: inline-block; text-align: center; width: 150px;">
                <img src="${imagen}" alt="${baile}" style="width: 70px;">
                <p>BAILE: ${baile}</p>
                <p>PRECIO: ${precio}</p>
                <p>DIA: ${dia}</p>
                <p>TURNO: ${turno}</p>
                <button class="btn-contratar">CONTRATAR</button>
                <button class="btn-descontratar">DESCONTRATAR</button>
            </div>
        `;
    }

    connectedCallback(){
        this.innerHTML=this.template;
    }

    static observedAttributes(){
        return ["imagen"];
    }

    attributeChangeCallback(){
        this.innerHTML=this.template;
    }
}

export const etiquetaFicha=customElements.define("ficha-curso", fichaCurso);