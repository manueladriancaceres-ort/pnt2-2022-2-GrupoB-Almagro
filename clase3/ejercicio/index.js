const obj = Vue.createApp({
    data() {
        return {
            mensaje: 'Hola Vue!',
            numero: 100,
            ok: true,
            nuevo: '',
            myStyle: {  color: '', 
                        fontSize: '50px', 
                        background: 'blue', 
                        display: 'block' },
        }
    },
    mounted(){
        console.log('se cargo');
    },
    methods: {
        incrementar(){
            this.numero++
        },
        cambioMensaje(){
            this.mensaje = this.nuevo
        },
        cambioDeEstado(){
            this.ok = !this.ok;

            if(this.ok){
                this.myStyle.background = 'green'
            }else{
                this.myStyle.background = 'blue'
            }
        }
    }
}).mount('#app')
    