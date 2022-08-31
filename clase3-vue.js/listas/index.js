const obj = Vue.createApp({
    data() {
        return {
            objetosVoladores:  [{ codigo: 1, nombre: 'Drone' },
                                { codigo: 2, nombre: 'Helicóptero' },
                                {codigo: 3, nombre: 'Superman'}],
            volador: { codigo: null, nombre: '' },
            filtro: null
        }
    },

    methods: {
        agregarVolador() {
                let copia = {codigo: conseguirMayor() +1,
                     nombre: this.volador.nombre};
                this.objetosVoladores.push(copia);
                // this.objetosVoladores.push({...this.volador});
                this.volador.nombre = '';            
        },
        ordenarPorNombre() {
            this.objetosVoladores.sort( (a, b) => a.nombre.localeCompare(b.nombre) )
        },
        filtroPorNombre() {
            console.log(this.filtro);
            this.objetosVoladores = this.objetosVoladores.filter( volador => volador.codigo == this.filtro )
        },
        conseguirMayor() {
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
