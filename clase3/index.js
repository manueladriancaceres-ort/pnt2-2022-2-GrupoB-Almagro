const obj = Vue.createApp({
    data() {
        return {
            mensaje: 'Hola Vue!',
            numero: 100,
            ok: true
        }
    },
    mounted() {
        console.log("Se cargó");
    },
    methods: {
        incrementar() {
            this.numero++;
            return "Sumo"
        },
        incrementarCantidad(cant) {
            this.numero += cant;
            return "Sumo " + cant;
        },
        cambioMensaje(nuevo) {
            this.mensaje = nuevo;
        },
        encendido() {
           this.ok = !this.ok;
        },
        reducir(){
            this.numero--;
            return "Resto"
        },
        reducirCantidad(cant){
            this.numero -= cant;
            return "Resto " + cant;
        }
    }
}).mount('#app')
