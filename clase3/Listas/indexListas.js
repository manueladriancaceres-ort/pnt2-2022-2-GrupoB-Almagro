const obj = Vue.createApp({
    data() {
        return {
            objetosVoladores: [{ codigo: 1, nombre: "Drone" },
            { codigo: 2, nombre: "Helicoptero" },
            { codigo: 3, nombre: "Superman" }
            ],
            volador: { codigo: 0, nombre: "" }
        }
    },
    methods: {
        agregarVolador() {
            let copia = { codigo: this.conseguirMayor() + 1, nombre: this.volador.nombre }
            this.objetosVoladores.push({ ...copia })
        },
        ordenarPorNombre() {
            this.objetosVoladores.sort((a, b) => a.nombre.localeCompare(b.nombre));
        },
        conseguirMayor() {
            let mayor = 0;
            this.objetosVoladores.forEach(vol => {
                if (vol.codigo > mayor) {
                    mayor = vol.codigo;
                }
            });
            return mayor;
        },
        filtroPorCodigo() {
            let copia = [...this.objetosVoladores];
            if (this.filtro != 0) {
                this.objetosVoladores = this.objetosVoladores.filter(volador => volador.codigo == this.filtro);
            } else if (this.filtro == 0) {
                this.objetosVoladores = copia; // encontrar forma que esa copia guarde los datos anteriores
            }
        },
        ordenarPorCodigo() {
            this.objetosVoladores.sort((a, b) => a.codigo - b.codigo);
        }
    }
}).mount('#app')
