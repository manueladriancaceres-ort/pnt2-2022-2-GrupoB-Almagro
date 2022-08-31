const obj = Vue.createApp({
    data() {
        return {
            objetosVoladores: [{codigo: 1, nombre:'Drone'},
                    {codigo: 2, nombre: 'Helicoptero'},
                    {codigo: 3, nombre: 'Avión'}],
            volador: {codigo: 0, nombre: ''},

        }
    },
    methods: {
        agregarVolador() {
            this.objetosVoladores.push({...this.volador});
            this.volador.codigo = 0;
            this.volador.nombre = '';
            this.ordenarPorNombre()
        },
        ordenarPorNombre() {
            this.objetosVoladores.sort((a,b) => a.nombre.localeCompare(b.nombre));
        },
        filtrarVolador() {
            this.objetosVoladores = this.objetosVoladores.filter(value => value.codigo > 5);
        }
    }

}).mount('#app')