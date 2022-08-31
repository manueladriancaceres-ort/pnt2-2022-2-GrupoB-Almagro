const obj = Vue.createApp({
    data() {
        return {
            mensaje: 'Hola Vue!',
            numero: 0,
            ok: true,
            myStyle: { color: 'black', fontSize: '50px', background: 'blue', display: 'block' },
            myStyle2: { color: 'black', fontSize: '50px', background: 'blue', display: 'block' },

        }
    },
    methods: {
        incrementar() {
            this.numero++;
            if(this.numero > 0) 
                this.myStyle2.background = 'green'
            else 
                this.myStyle2.background = 'red';
        },
        decrementar() {
            this.numero--;
            if(this.numero > 0) 
                this.myStyle2.background = 'green'
            else 
                this.myStyle2.background = 'red';
        },
        reiniciar() {
            this.numero = 0;
            if(this.numero == 0) 
                this.myStyle2.background = 'red'
        },
        onoff() {
            this.ok = !this.ok
            if(this.ok) 
                this.myStyle.background = 'green';
            else 
                this.myStyle.background = 'orange';
        }
    }

}).mount('#app')