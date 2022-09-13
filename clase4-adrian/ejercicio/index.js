const obj = Vue.createApp({
    data() {
        return {
            factura: {codigo:'00000001',cliente:'Carlos Gomez',items:[]},
            item: {codigo:'',desc:''},
            myStyle: { color: 'green' },
        }
    },
    methods: {
        agregarItem() {
            this.factura.items.push({...this.item});
            this.item = {codigo:'',desc:''}
        },
        ordenarItemsPorDescripcion() {
            this.factura.items.sort((a,b) => a.desc.localeCompare(b.desc));
        },
        imprimirJson() {
            console.log( JSON.stringify(this.factura)  );
        },
        cambiarColorLetraTitulo() {
            this.myStyle.color = "blue";
        }

    }
}).mount('#app')

