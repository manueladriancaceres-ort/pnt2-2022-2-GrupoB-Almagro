const obj = Vue.createApp({
    data() {
        return {
            itemFacturas: [],
            item: {nombreItem: ''},
            mensajeError: '',
            titulo: '',
            tituloNuevo: '',
            codFactura:  '',
            codNuevo:    '',
            numCliente:  '',
            numNuevo:    '',
            myStyle: {  color: '', 
                        fontSize: '25px', 
                        background: '', 
                        display: 'block' },
            ok: false,
        }
    },
    methods: {
        guardar(){
            let esInvalido =  this.tituloNuevo == '' ||
                              this.codNuevo    == '' ||
                              this.numNuevo    == '' 

            if(esInvalido){
                this.mensajeError = 'El campo no puede estar en blanco.'
            }else{
                this.titulo     = this.tituloNuevo,
                this.codFactura = this.codNuevo,
                this.numCliente = this.numNuevo,
                this.mensajeError = ''
            }
        },

        agregarItem(){
            if(this.item.nombreItem == ''){
                this.mensajeError = 'El campo no puede estar en blanco.'
            }else{
                let copia ={nombreItem: this.item.nombreItem}
                this.itemFacturas.push(copia)
            }
        },

        cambiarColorTitulo(){
            this.ok = !this.ok

            if(this.ok){
                this.myStyle.background = 'blue'
            }else{
                this.myStyle.background = ''
            }
        },

        ordenarPorNombre(){
            this.itemFacturas.sort( (a,b) => a.nombreItem.localeCompare(b.nombreItem))
        },
    }
}).mount('#app')