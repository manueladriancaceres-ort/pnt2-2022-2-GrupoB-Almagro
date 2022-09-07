const obj = Vue.createApp({
    data() {
        return {
            factura: {
                titulo: 'Titulo Factura', codigo: 5, nroCliente: 3, items: [{ descripcion: 'null' }]
            },
            myStyle: { color: 'green', fontSize: '50px' },
        }
    },


    methods: {
        agregarItem() {
            this.factura.items.push({ descripcion: this.factura.items.descripcion })
        },
        cambiarColorTitulo() {
            if (this.myStyle.color == 'green') {
                this.myStyle.color = 'red';
            } else if (this.myStyle.color == 'red') {
                this.myStyle.color = 'blue';
            } else {
                this.myStyle.color = 'green';
            }
        },
        ordenarXDescripcion() {
            this.factura.items.sort((a, b) => a.descripcion.localeCompare(b.descripcion));
        },
        mostrarFactura() {
            console.log(this.factura)
            this.factura.items.forEach(item => { console.log(item) })
        }
    }
}).mount('#app')