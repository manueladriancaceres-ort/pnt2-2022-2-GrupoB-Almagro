const obj = Vue.createApp({
    data() {
        return {
            mensaje: 'Hola Vue!',
            numero: 100,
            ok: true,
            varn: '',
            myStyle: { color: 'red', fontSize: '50px', background: 'blue', display: 'block' },
        }
    },
    mounted() {
        console.log('se cargó');
    },
    methods: {
        incrementar() {
            this.numero++;
        },
        cambioMensaje() {
            this.mensaje = this.varn;
        },
        pasaraOff() {
            this.ok = !this.ok;
            
            if(this.ok) {
                this.myStyle.background = 'green';
            } else {
                this.myStyle.background = 'pink';
            } 
                       
        }
    }
}).mount('#app')