const obj = Vue.createApp({
    data() {
        return {
            objetosVoladores: [{codigo: 1, nombre: 'Superman'},
                               {codigo: 2, nombre: 'Elicoptero'},
                               {codigo: 3, nombre: 'Drone'}],
            volador: {codigo: 0, nombre:''},
            mensajeError: '',
            filtro: 0
        }
    },
    methods: {
        agregarVolador(){
            let copia ={codigo: this.conseguirMayor()+1,
                        nombre: this.volador.nombre
            }
            this.objetosVoladores.push(copia)
            this.volador.nombre = ''
        },

        ordenarPorNombre(){
            this.objetosVoladores.sort( (a,b) => a.nombre.localeCompare(b.nombre))
        },
        filtroPorCodigo(){
            this.objetosVoladores = this.objetosVoladores.filter(volador => volador.codigo ==
            this.filtro);
        },
        conseguirMayor(){
            let mayor = 0;
            this.objetosVoladores.forEach(vol => {
                if (vol.codigo > mayor) {
                    mayor = vol.codigo;
                }
            });
            return mayor;

        }
    }
}).mount('#app')