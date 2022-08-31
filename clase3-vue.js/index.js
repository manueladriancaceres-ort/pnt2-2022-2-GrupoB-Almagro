const obj = Vue.createApp({
    data() {
        return {
            mensaje: 'Hola Vue!',
            numero: 100,
            ok: true,
            nuevo: '',
            myStyle: { color: 'blue', fontSize: '50px', background: 'yellow', display: 'inline' },

        }
    },
    mounted() {
        console.log('Se cargó')
    },
    methods: {
        incrementar() {
            this.numero ++
        },
        restar() {
            this.numero --
        },
        cambioMensaje() {
            this.mensaje = this.nuevo;
        },
        cambiarDeCuadro() {
            this.ok = !this.ok
            if(!this.ok) {
                this.myStyle.background = 'white'
                this.myStyle.color = 'red'
            } else {
                this.myStyle.background = 'yellow'
                this.myStyle.color = 'blue'
            }
        }
    }
}).mount('#app')
