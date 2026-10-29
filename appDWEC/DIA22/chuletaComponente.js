/**
 * Plantilla Base para un Web Component (Custom Element)
 * Estructura estándar reutilizable para desarrollo web modular.
 */
class Clase extends HTMLElement {
    
    constructor() {
        super(); // OBLIGATORIO: Llama al constructor de la clase padre (HTMLElement).
                 // Inicializa el contexto de 'this' y permite usar el componente.
                 
        // AQUÍ SE SUELE INICIALIZAR:
        // - Adjuntar el Shadow DOM: this.attachShadow({ mode: 'open' });
        // - Vincular contexto de métodos (this.miMetodo = this.miMetodo.bind(this));
    }

    /**
     * Getter personalizado para el template HTML.
     * Retorna un elemento <template> con la estructura visual y los estilos del componente.
     */
    get template() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Los estilos aquí dentro están encapsulados gracias al Shadow DOM */
                :host {
                    display: block;
                    font-family: sans-serif;
                }
            </style>
            <div>
                <!-- Contenido HTML de tu componente -->
                <slot></slot> <!-- El slot permite proyectar contenido desde fuera -->
            </div>
        `;
        return template;
    }

    /**
     * Ciclo de vida: connectedCallback()
     * Se ejecuta automáticamente cuando el navegador inserta el elemento en el DOM de la página.
     */
    connectedCallback() {
        // IDEAL PARA:
        // 1. Renderizar el contenido clonando el template dentro del Shadow DOM.
        // 2. Añadir event listeners (escuchas de eventos).
        // 3. Hacer peticiones fetch iniciales o leer atributos por defecto.
        
        // Ejemplo de renderizado típico:
        // if (!this.shadowRoot) {
        //     this.attachShadow({ mode: 'open' });
        //     this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        // }
        //le dice a la etiqueta que hacer cuando se crea
    }

    /**
     * Método estático: observedAttributes
     * Debe retornar un Array con los nombres de los atributos HTML que deseas vigilar.
     */
    static get observedAttributes() {
        return ['mi-atributo']; // Ejemplo: Si cambia 'mi-atributo', saltará la alerta
    }

    /**
     * Ciclo de vida: attributeChangedCallback(name, oldValue, newValue)
     * Se ejecuta automáticamente cuando uno de los atributos de 'observedAttributes' cambia.
     * 
     * @param {string} name - Nombre del atributo que cambió.
     * @id {string} oldValue - Valor que tenía antes el atributo.
     * @param {string} newValue - Nuevo valor del atributo.
     */
    attributeChangedCallback(name, oldValue, newValue) {//le dice a la etiqueta que hacer cuando cambia algun atributo suyo
        if (oldValue !== newValue) {
            // IDEAL PARA: Actualizar la interfaz o reaccionar dinámicamente a cambios externos.
            console.log(`El atributo ${name} cambió de "${oldValue}" a "${newValue}"`);
        }
    }
}

// Registro oficial del Custom Element en el navegador.
// 1er parámetro: Nombre de la etiqueta HTML personalizada (obligatorio incluir un guion '-').
// 2º parámetro: La clase de JavaScript que define su comportamiento.
export const etiquetaClase = window.customElements.define("app-clase", Clase);