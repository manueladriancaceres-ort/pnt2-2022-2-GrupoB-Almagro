const obj = Vue.createApp({
    data() {
        return {
            factura:{titulo: "TituloDeLaFactura", codigo: 0, nroCliente: 0, items: [{ descripcion: '' }]},
            descripcionDelItem: '' ,
            myStyle: { color: 'red', fontSize: '35px', display: 'inline'}

        }
    
    },
    methods: {
        agregarItem() {
            this.factura.items.push({descripcion: this.descripcionDelItem})
            
        },

        cambiarColorTitulo() {
            if(this.myStyle.color == 'red') {
                this.myStyle.color = 'blue'
            } else {
                this.myStyle.color = 'red'
            }
        },

        ordenarPorDescripcion() {
            this.factura.items.sort((a, b) => a.descripcion.localeCompare(b.descripcion));
        },

        mostrarFactura() {
            console.log(this.factura)
            this.factura.items.forEach(item => {console.log(item)})
        }

    }
    
}).mount('#app')