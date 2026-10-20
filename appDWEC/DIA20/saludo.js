class Saludo extends HTMLElement {
            /*constructor() {
                super();
                let shadowRoot=this.attachShadow({mode: 'open'});
                shadowRoot.innerHTML=this.template;
            }*/
           constructor(){
            super();
           }
           connectedCallback(){
            this.innerHTML=this.template;
           }
            get template(){
                let contenido=this.getAttribute("texto");
                return `<p>${contenido}</p>`;
            }
            static get observedAttributes(){
                return ['texto'];
            }
            attributeChangedCallback(name, oldValue, newValue){
                this.shadowRoot.innerHTML=this.template;
            }
        }
export const etiquetaSaludo=window.customElements.define('app-saludo', Saludo);